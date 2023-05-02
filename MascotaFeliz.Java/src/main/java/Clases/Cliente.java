/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Clases;

/**
 *
 * @author Dell
 */
public class Cliente {
    private int idPk;
    private String identificacion;
    private String nombres;
    private String apellidos;
    private String direccion;
    private String telefono;
    private Mascota m;

    public Cliente(String identificacion, String nombres, String apellidos, String direccion, String telefono) {
        this.identificacion = identificacion;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    /**
     * @return the identificacion
     */
    public String getidentificacion() {
        return identificacion;
    }

    /**
     * @param identificacion the identificacion to set
     */
    public void setidentificacion(String identificacion) {
        this.identificacion = identificacion;
    }

    /**
     * @return the nombres
     */
    public String getNombres() {
        return nombres;
    }

    /**
     * @param nombres the nombres to set
     */
    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    /**
     * @return the apellidos
     */
    public String getApellidos() {
        return apellidos;
    }

    /**
     * @param apellidos the apellidos to set
     */
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    /**
     * @return the direccion
     */
    public String getDireccion() {
        return direccion;
    }

    /**
     * @param direccion the direccion to set
     */
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    /**
     * @return the telefono
     */
    public String getTelefono() {
        return telefono;
    }

    /**
     * @param telefono the telefono to set
     */
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    /**
     * @return the m
     */
    public Mascota getM() {
        return m;
    }

    /**
     * @param m the m to set
     */
    public void setM(Mascota m) {
        this.m = m;
    }

    /**
     * @return the idPk
     */
    public int getIdPk() {
        return idPk;
    }

    /**
     * @param idPk the idPk to set
     */
    public void setIdPk(int idPk) {
        this.idPk = idPk;
    }
    
    
}
