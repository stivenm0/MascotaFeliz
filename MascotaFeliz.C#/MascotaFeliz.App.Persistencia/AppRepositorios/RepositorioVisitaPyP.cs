using System;
using System.Collections.Generic;
using System.Linq;
using MascotaFeliz.App.Dominio;
using Microsoft.EntityFrameworkCore;

namespace MascotaFeliz.App.Persistencia
{
    public class RepositorioVisitaPyP : IRepositorioVisitaPyP
    {
        /// <summary>
        /// Referencia al contexto de Dueno
        /// </summary>
        private readonly AppContext _appContext;   //atributo 
        /// <summary>
        /// Metodo Constructor Utiiza 
        /// Inyeccion de dependencias para indicar el contexto a utilizar
        /// </summary>
        /// <param name="appContext"></param>//
        public RepositorioVisitaPyP(AppContext appContext)
        {
            _appContext = appContext;
        }

        public VisitaPyP AddVisitaPyP(VisitaPyP visitaPyP)
        {
            var visitaPyPAdicionado = _appContext.VisitasPyP.Add(visitaPyP);
            _appContext.SaveChanges();
            return visitaPyPAdicionado.Entity;
        }

        public void DeleteVisitaPyP(int idVisitaPyP)
        {
            var visitaPyPEncontrado = _appContext.VisitasPyP.FirstOrDefault(d => d.Id == idVisitaPyP);
            if (visitaPyPEncontrado == null)
                return;
            _appContext.VisitasPyP.Remove(visitaPyPEncontrado);
            _appContext.SaveChanges();
            _appContext.Exit();
        }

       public IEnumerable<VisitaPyP> GetAllVisitasPyP()
        {
            return _appContext.VisitasPyP.Include("Historia");
        }

        public IEnumerable<VisitaPyP> GetVisitasPorFiltro(int idHistoria)
        {
            var visitas = GetAllVisitasPyP(); // Obtiene todos los saludos
            
            if (visitas != null)  //Si se tienen saludos
            {
                if (idHistoria!=0) // Si el filtro tiene algun valor
                {
                    visitas = visitas.Where(s => s.Historia!=null && s.Historia.Id ==idHistoria);
                }
            }
            return visitas;
        }

        public Historia AsignarHistoria(int idVisitaPyP, int idHistoria)
        {
            var visitaEncontrada = _appContext.VisitasPyP.FirstOrDefault(m => m.Id == idVisitaPyP);
            if (visitaEncontrada != null)
            {
                var historiaEncontrada = _appContext.Historias.FirstOrDefault(v => v.Id == idHistoria);
                if (historiaEncontrada != null)
                {
                    visitaEncontrada.Historia = historiaEncontrada;
                    _appContext.SaveChanges();
                }
                return historiaEncontrada;
            }
            return null;
        }


         public Veterinario AsignarVeterinario(int idVisitaPyP, int idVeterinario)
        {
            var visitaEncontrada = _appContext.VisitasPyP.FirstOrDefault(m => m.Id == idVisitaPyP);
            if (visitaEncontrada != null)
            {
                var veterinarioEncontrado = _appContext.Veterinarios.FirstOrDefault(v => v.Id == idVeterinario);
                if (veterinarioEncontrado != null)
                {
                    visitaEncontrada.IdVeterinario = veterinarioEncontrado.Id;
                    _appContext.SaveChanges();
                }
                return veterinarioEncontrado;
            }
            return null;
        }


        public VisitaPyP GetVisitaPyP(int idVisitaPyP)
        {
            return _appContext.VisitasPyP.Include("Historia").FirstOrDefault(d => d.Id == idVisitaPyP);
        }

        public VisitaPyP UpdateVisitaPyP(VisitaPyP visitaPyP)
        {
            var visitaPyPEncontrado = _appContext.VisitasPyP.FirstOrDefault(d => d.Id == visitaPyP.Id);
            if (visitaPyPEncontrado != null)
            {
                visitaPyPEncontrado.FechaVisita = visitaPyP.FechaVisita;
                visitaPyPEncontrado.Temperatura = visitaPyP.Temperatura; 
                visitaPyPEncontrado.Peso = visitaPyP.Peso; 
                visitaPyPEncontrado.FrecuenciaRespiratoria = visitaPyP.FrecuenciaRespiratoria; 
                visitaPyPEncontrado.FrecuenciaCardiaca = visitaPyP.FrecuenciaCardiaca; 
                visitaPyPEncontrado.EstadoAnimo = visitaPyP.EstadoAnimo; 
                visitaPyPEncontrado.IdVeterinario = visitaPyP.IdVeterinario; 
                visitaPyPEncontrado.Recomendaciones = visitaPyP.Recomendaciones; 
                

                _appContext.SaveChanges();
            }
            return visitaPyPEncontrado;
        }     
    }
}
