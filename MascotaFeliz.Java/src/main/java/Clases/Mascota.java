/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Clases;

/**
 *
 * @author Dell
 */
public class Mascota {

    private int IdPk;
    private String codigo;
    private String nombre;
    private int annioNac;
    private int peso;
    private String especie;
    private int idCliente;

    public Mascota(String codigo, String nombre, int annioNac, int peso, String especie, int idCliente) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.annioNac = annioNac;
        this.peso = peso;
        this.especie = especie;
        this.idCliente = idCliente;
    }

    
    
    /**
     * @return the idCliente
     */
    public int getIdCliente() {
        return idCliente;
    }

    /**
     * @param idCliente the idCliente to set
     */
    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    /**
     * @return the codigo
     */
    public String getCodigo() {
        return codigo;
    }

    /**
     * @param codigo the codigo to set
     */
    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    /**
     * @return the nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * @return the annioNac
     */
    public int getAnnioNac() {
        return annioNac;
    }

    /**
     * @param annioNac the annioNac to set
     */
    public void setAnnioNac(int annioNac) {
        this.annioNac = annioNac;
    }

    /**
     * @return the peso
     */
    public int getPeso() {
        return peso;
    }

    /**
     * @param peso the peso to set
     */
    public void setPeso(int peso) {
        this.peso = peso;
    }

    /**
     * @return the especie
     */
    public String getEspecie() {
        return especie;
    }

    /**
     * @param especie the especie to set
     */
    public void setEspecie(String especie) {
        this.especie = especie;
    }

    /**
     * @return the IdPk
     */
    public int getIdPk() {
        return IdPk;
    }

    /**
     * @param IdPk the IdPk to set
     */
    public void setIdPk(int IdPk) {
        this.IdPk = IdPk;
    }

}
