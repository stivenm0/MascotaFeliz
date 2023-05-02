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
    public class EliminarMascotaModel : PageModel
    {
        public IEnumerable<VisitaPyP>  ListaVisitasPyP {get; set;}
        private readonly IRepositorioMascota _repoMascota;
        private readonly IRepositorioHistoria _repoHistoria;
        private readonly IRepositorioVisitaPyP _repoVisita;

        
        public VisitaPyP visita { get; set; }

        [BindProperty]
        public Mascota mascota { get; set; }
        public Historia historia { get; set; }

        public EliminarMascotaModel(){
            this._repoMascota = new RepositorioMascota(new Persistencia.AppContext());
            this._repoHistoria = new RepositorioHistoria(new Persistencia.AppContext());
            this._repoVisita = new RepositorioVisitaPyP(new Persistencia.AppContext());
            
            
        }

         public IActionResult OnGet(int? mascotaId){
            
           
            if (mascotaId.HasValue)
            {
                mascota = _repoMascota.GetMascota(mascotaId.Value);
                        
            
                
            }
            if (mascota == null)
            {
                return RedirectToPage("./NotFound");
            }
            else
                return Page();
        }

        public IActionResult OnPost(){
            
                
             int idH=  _repoMascota.DeleteMascota(mascota.Id);
             ListaVisitasPyP = _repoVisita.GetVisitasPorFiltro(idH);
             
                    
            return RedirectToPage("../Listas");
        }
    }
}
