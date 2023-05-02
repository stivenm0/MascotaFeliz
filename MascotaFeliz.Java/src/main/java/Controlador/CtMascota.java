/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Controlador;

import Clases.Mascota;
import Clases.MascotasporEspecie;
import Modelo.MdMascota;
import java.util.LinkedList;

/**
 *
 * @author CarlosFadul
 */
public class CtMascota {

    MdMascota MdMascota;

    public CtMascota() {
        this.MdMascota = new MdMascota();
    }

    public boolean crearMascota(Mascota m) {
        try {
            this.MdMascota.crearMascota(m);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    public Mascota buscarMascota(String codigo) {
        Mascota m = null;
        m = MdMascota.buscarMascota(codigo);
        return m;
    }

    public boolean actualizarMascota(Mascota m) {
        return MdMascota.actualizarMascota(m);
    }

    public boolean borrarMascota(Mascota m) {
        return MdMascota.borrarMascota(m);
    }
    
    public LinkedList<Mascota> listarTodosMascotas() {
        LinkedList<Mascota> resultado = new LinkedList();
        try {
            resultado = this.MdMascota.buscarTodosMascotas();
        } catch (Exception e) {

        }
        return resultado;
    }
    
    public LinkedList<MascotasporEspecie> buscarEspecieMascotas(){
        LinkedList<MascotasporEspecie> reporte = this.MdMascota.buscarEspecieMascotas();
        return reporte;
    }

}
