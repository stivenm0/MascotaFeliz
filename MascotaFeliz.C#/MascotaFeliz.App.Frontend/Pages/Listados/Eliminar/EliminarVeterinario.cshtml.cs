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
    public class EliminarVeterinarioModel : PageModel
    {
         private readonly IRepositorioVeterinario _repoVeterinario;
        [BindProperty]
        public Veterinario veterinario { get; set; }

        public EliminarVeterinarioModel(){
            this._repoVeterinario = new RepositorioVeterinario(new Persistencia.AppContext());
        }


         public IActionResult OnGet(int? veterinarioId){
            if (veterinarioId.HasValue)
            {
                veterinario = _repoVeterinario.GetVeterinario(veterinarioId.Value);
            }
            if (veterinario == null)
            {
                return RedirectToPage("./NotFound");
            }
            else
                return Page();
        }

        public IActionResult OnPost(){
           
            
            _repoVeterinario.DeleteVeterinario(veterinario.Id);
            
            return RedirectToPage("../Listas");
        }
    }
}
