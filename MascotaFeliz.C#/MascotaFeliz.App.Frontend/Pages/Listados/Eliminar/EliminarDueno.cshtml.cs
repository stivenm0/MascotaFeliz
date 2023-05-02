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
    public class EliminarDuenoModel : PageModel
    {
        
        private readonly IRepositorioDueno _repoDueno;
        [BindProperty]
        public Dueno dueno { get; set; }

        public EliminarDuenoModel(){
            this._repoDueno = new RepositorioDueno(new Persistencia.AppContext());
        }

         public IActionResult OnGet(int? duenoId){

            if (duenoId.HasValue)
            {
                dueno = _repoDueno.GetDueno(duenoId.Value);
            }
            if (dueno == null)
            {
                return RedirectToPage("./NotFound");
            }
            else
                return Page();
        }

        public IActionResult OnPost(){
           
            
            _repoDueno.DeleteDueno(dueno.Id);
            
            
            return RedirectToPage("../Listas");
        }
    }
}
