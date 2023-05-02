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
    public class EditarVisitaModel : PageModel
    {
        private readonly IRepositorioVisitaPyP _repoVisitaPyP;
        private readonly IRepositorioVeterinario _repoVeterinario;
        private readonly IRepositorioHistoria _repoHistoria;
        private readonly IRepositorioMascota _repoMascota;

        public IEnumerable<Veterinario>  ListaVeterinarios {get; set;}
        public IEnumerable<Mascota>  ListaMascotas {get; set;}
        public IEnumerable<Historia>  ListaHistorias {get; set;}
        public IEnumerable<VisitaPyP>  ListaVisitasPyP {get; set;}

        [BindProperty]
        public VisitaPyP visita { get; set; }
        [BindProperty]
        public Historia historia { get; set; }
        
        [BindProperty]
        public Veterinario veterinario  { get; set; }

        public EditarVisitaModel(){
            this._repoVisitaPyP = new RepositorioVisitaPyP(new Persistencia.AppContext());
            this._repoVeterinario = new RepositorioVeterinario(new Persistencia.AppContext());
            this._repoHistoria = new RepositorioHistoria(new Persistencia.AppContext());
            this._repoMascota = new RepositorioMascota(new Persistencia.AppContext());
            historia = new Historia();
            visita = new VisitaPyP();
            veterinario = new Veterinario();
        }

         public IActionResult OnGet(int? visitaId, int? historiaId){
            
            ListaVeterinarios = _repoVeterinario.GetAllVeterinarios();
            ListaHistorias = _repoHistoria.GetAllHistorias();
            ListaMascotas = _repoMascota.GetAllMascotas();
            
            if(historiaId.HasValue){
            historia = _repoHistoria.GetHistoria(historiaId.Value);
            }

            if (visitaId.HasValue)
            {
                visita = _repoVisitaPyP.GetVisitaPyP(visitaId.Value);
                veterinario = _repoVeterinario.GetVeterinario(visita.IdVeterinario);
            }
            else
            {
                visita = new VisitaPyP();
                
                
            }
            

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
            if (visita.Id > 0)
            {
                visita = _repoVisitaPyP.UpdateVisitaPyP(visita);
            }
            else
            {

                visita=  _repoVisitaPyP.AddVisitaPyP(visita);

                _repoVisitaPyP.AsignarHistoria(visita.Id, historia.Id);
                
            

                
            }
            return RedirectToPage("../Listas");
        }
    }
}
