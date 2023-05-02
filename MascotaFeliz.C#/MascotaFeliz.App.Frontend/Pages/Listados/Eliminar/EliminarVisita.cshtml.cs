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
    public class EliminarVisitaModel : PageModel
    {
        private readonly IRepositorioVisitaPyP _repoVisitaPyP;
       
        [BindProperty]
        public VisitaPyP visita { get; set; }

        public EliminarVisitaModel(){
            this._repoVisitaPyP = new RepositorioVisitaPyP(new Persistencia.AppContext());

        }

         public IActionResult OnGet(int? visitaId){

            
            
            if (visitaId.HasValue)
            {
                visita = _repoVisitaPyP.GetVisitaPyP(visitaId.Value);
            }
            if (visita == null)
            {
                return RedirectToPage("./NotFound");
            }
            else
                return Page();
        }

        public IActionResult OnPost(){
           
            
            _repoVisitaPyP.DeleteVisitaPyP(visita.Id);
            
            
            return RedirectToPage("../Listas");
        }

    }
}
