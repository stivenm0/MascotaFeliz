using System;
using System.Collections.Generic;

namespace MascotaFeliz.App.Dominio
{
    public class Historia
    {
        public int Id {get;set;}
        public DateTime FechaInicio {get;set;}
        public List<VisitaPyP> VisitasPyP {get;set;}
    }
}