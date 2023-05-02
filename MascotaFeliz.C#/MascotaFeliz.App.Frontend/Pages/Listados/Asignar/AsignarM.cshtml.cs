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
    public class AsignarMModel : PageModel
    {
        private readonly IRepositorioHistoria _repoHistoria;
        private readonly IRepositorioVeterinario _repoVeterinario;
        private readonly IRepositorioDueno _repoDueno;
        private readonly IRepositorioMascota _repoMascota;
        public IEnumerable<Historia>  Lhistorias {get; set;}
        public IEnumerable<Veterinario>  Lveterinarios {get; set;}
        public IEnumerable<Dueno>  Lduenos {get; set;}

       [BindProperty]
        public Mascota mascota { get; set; }
        [BindProperty]
        public Historia historia { get; set; }
        [BindProperty]
        public Dueno dueno { get; set; }
        [BindProperty]
        public Veterinario veterinario { get; set; }

       public AsignarMModel(){
            this._repoHistoria = new RepositorioHistoria(new Persistencia.AppContext());
            this._repoVeterinario = new RepositorioVeterinario(new Persistencia.AppContext());
            this._repoDueno = new RepositorioDueno(new Persistencia.AppContext());
            this._repoMascota = new RepositorioMascota(new Persistencia.AppContext());
            mascota= new Mascota();
            historia = new Historia();
            dueno = new Dueno();
            veterinario = new Veterinario();
        }

           

         public IActionResult OnGet(int? mascotaId){

            mascota = _repoMascota.GetMascota(mascotaId.Value);
            Lhistorias = _repoHistoria.GetAllHistorias();
            Lveterinarios = _repoVeterinario.GetAllVeterinarios();
            Lduenos = _repoDueno.GetAllDuenos();
            
            
            
            if (mascota == null)
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
                _repoMascota.AsignarHistoria(mascota.Id, historia.Id);
             }
             if(dueno.Id!=0){
                _repoMascota.AsignarDueno(mascota.Id, dueno.Id);
             }
             if(veterinario.Id!=0){
                _repoMascota.AsignarVeterinario(mascota.Id, veterinario.Id);
             }

            return RedirectToPage("../Listas");
        }
        
    }
}
