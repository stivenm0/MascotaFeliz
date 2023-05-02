/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Controlador;

import Clases.Cliente;
import Modelo.MdCliente;
import java.util.LinkedList;
import javax.swing.JComboBox;

/**
 *
 * @author Jorge Hernán Obando Chacón  <your.name at your.org>
 */
public class CtCliente {

    MdCliente MdCliente;

    public CtCliente() {
        this.MdCliente = new MdCliente();
    }
    

    public boolean crearCliente(Cliente c) {
        try{
            this.MdCliente.crearCliente(c);
        }catch (Exception e){
        return false;
        }
        return true;
    }
    
    public LinkedList<Cliente> listarTodosClientes() {
        LinkedList<Cliente> resultado = new LinkedList();
        try {
            resultado = this.MdCliente.buscarTodosClientes();
        } catch (Exception e) {

        }
        return resultado;
    }
    
    
    public int obtenerIdPKClienteComboBox(LinkedList<Cliente> cl, JComboBox cbCliente) {
        //guardo la posición del comboBox con lo que selecciono el usuario
        int indiceComboCliente = -1;
        indiceComboCliente = cbCliente.getSelectedIndex();

        int idPKCliente = -1; //variable para almacenar la PK del cliente, si no seleccionan nada toma valor de -1        
        int indiceListaCliente = -1; //var para comparar la lista con el combo

        /*Pregunto si hay algo seleccionado en el combo, si el #elementos de la lista es mayor que el indice del combo
        y si los nombres del combo y la lista son iguales      
         */
        if (indiceComboCliente >= 0 && cl.size() > indiceComboCliente && cbCliente.getSelectedItem().toString().equals(
                (cl.get(indiceComboCliente).getNombres() + " " + cl.get(indiceComboCliente).getApellidos()))) {

            indiceListaCliente = indiceComboCliente; //guardo el valor del indice del combo el indicelista

            //en idPKCliente guardo lo que tiene la lista en la posicion indiceListaCliente y le llevo el id_cliente         
            idPKCliente = cl.get(indiceListaCliente).getIdPk();
        }

        return idPKCliente;
    }

    

    public Cliente buscarCliente(String identificacion){
        Cliente c = null;
        c = this.MdCliente.buscarCliente(identificacion);
        return c;
    }
    
    public boolean actualizarCliente(Cliente c){
        return this.MdCliente.actualizarCliente(c);
    }
    
    public boolean borrarCliente(Cliente p){
        return this.MdCliente.borrarCliente(p);
    }
    
}
