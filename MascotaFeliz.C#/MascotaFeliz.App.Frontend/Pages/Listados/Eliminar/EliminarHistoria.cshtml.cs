using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using MascotaFeliz.App.Dominio;
using MascotaFeliz.App.Persistencia;

namespace MascotaFeliz.App.Pages
{
    public class EliminarHistoriaModel : PageModel
    {
        private readonly IRepositorioHistoria _repoHistoria;
        [BindProperty]
        public Historia historia { get; set; }

        public EliminarHistoriaModel(){
            this._repoHistoria = new RepositorioHistoria(new Persistencia.AppContext());
        }

         public IActionResult OnGet(int? historiaId){

            if (historiaId.HasValue)
            {
                historia = _repoHistoria.GetHistoria(historiaId.Value);
            }
            if (historia == null)
            {
                return RedirectToPage("./NotFound");
            }
            else
                return Page();
        }

        public IActionResult OnPost(){
           
            
            _repoHistoria.DeleteHistoria(historia.Id);
            
            
            return RedirectToPage("../Listas");
        }
    }
}
