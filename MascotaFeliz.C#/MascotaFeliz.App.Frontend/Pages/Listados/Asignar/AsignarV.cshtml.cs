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
    public class AsignarVModel : PageModel
    {
        private readonly IRepositorioHistoria _repoHistoria;
        private readonly IRepositorioVeterinario _repoVeterinario;
        private readonly IRepositorioVisitaPyP _repoVisita;
      
        public IEnumerable<Historia>  Lhistorias {get; set;}
        public IEnumerable<Veterinario>  Lveterinarios {get; set;}
        

        [BindProperty]
        public Historia historia { get; set; }
        [BindProperty]
        public VisitaPyP visita { get; set; }
        [BindProperty]
        public Veterinario veterinario { get; set; }

       public AsignarVModel(){
            this._repoHistoria = new RepositorioHistoria(new Persistencia.AppContext());
            this._repoVeterinario = new RepositorioVeterinario(new Persistencia.AppContext());
            this._repoVisita = new RepositorioVisitaPyP(new Persistencia.AppContext());
            historia = new Historia();
            visita = new VisitaPyP();
            veterinario = new Veterinario();
        }

           

         public IActionResult OnGet(int? visitaId){

            visita = _repoVisita.GetVisitaPyP(visitaId.Value);
            Lhistorias = _repoHistoria.GetAllHistorias();
            Lveterinarios = _repoVeterinario.GetAllVeterinarios();
            
            
            
            
            if (visita == null)
            {
                return RedirectToPage("./NotFound");
            }
            else
                return Page();
        }



         public IActionResult OnPost(){
            if (!ModelState.IsValid)
            {
                return Page();
            }

            
            
             if(historia.Id!=0){
                _repoVisita.AsignarHistoria(visita.Id, historia.Id);
             }
             if(veterinario.Id!=0){
                _repoVisita.AsignarVeterinario(visita.Id, veterinario.Id);
             }

            
            return RedirectToPage("../Listas");
        }
    }
}
