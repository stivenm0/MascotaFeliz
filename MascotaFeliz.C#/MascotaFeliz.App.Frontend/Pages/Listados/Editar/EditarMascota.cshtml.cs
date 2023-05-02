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
    public class EditarMascotaModel : PageModel
    {
        private readonly IRepositorioMascota _repoMascota;
        private readonly IRepositorioHistoria _repoHistoria;
        private readonly IRepositorioDueno _repoDueno;
        private readonly IRepositorioVeterinario _repoVeterinario;
        

        public IEnumerable<Historia>  ListaHistorias {get; set;}
        public IEnumerable<Dueno>  ListaDuenos {get; set;}
        public IEnumerable<Veterinario>  ListaVeterinarios {get; set;}

        [BindProperty]
        public Mascota mascota { get; set; }
    
        public EditarMascotaModel(){
            this._repoMascota = new RepositorioMascota(new Persistencia.AppContext());
            this._repoHistoria = new RepositorioHistoria(new Persistencia.AppContext());
            this._repoDueno = new RepositorioDueno(new Persistencia.AppContext());
            this._repoVeterinario = new RepositorioVeterinario(new Persistencia.AppContext());
        }

       public IActionResult OnGet(int? mascotaId){
        ListaHistorias = _repoHistoria.GetAllHistorias();
        ListaDuenos = _repoDueno.GetAllDuenos();
        ListaVeterinarios = _repoVeterinario.GetAllVeterinarios();


            if (mascotaId.HasValue)
            {
                mascota = _repoMascota.GetMascota(mascotaId.Value);
            }
            else
            {
                mascota = new Mascota();
            }
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
            if (mascota.Id > 0)
            {
                mascota = _repoMascota.UpdateMascota(mascota);
            }
            else
            {
                
                _repoMascota.AddMascota(mascota);
            }
            return RedirectToPage("../Listas");
        }



    }
}

        

        

         






        




        

        
        
       