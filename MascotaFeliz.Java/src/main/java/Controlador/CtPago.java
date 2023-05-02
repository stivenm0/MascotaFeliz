/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Controlador;

import Clases.Pago;
import Modelo.MdPago;

/**
 *
 * @author Dell
 */
public class CtPago {

    MdPago MdPago;

    public CtPago() {
        this.MdPago = new MdPago();
    }

    public boolean crearPago(Pago p) {
        try {
            this.MdPago.crearPago(p);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    public Pago buscarPago(String id) {
        Pago p = null;
        p = MdPago.buscarPago(id);
        return p;
    }
    
    public boolean actualizarPago(Pago p) {
        return MdPago.actualizarPago(p);
    }
    
    public boolean borrarPago(Pago p) {
        return MdPago.borrarPago(p);
    }
}
