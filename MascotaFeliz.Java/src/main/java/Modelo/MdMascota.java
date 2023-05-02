/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Modelo;

import Clases.Mascota;
import Clases.MascotasporEspecie;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.LinkedList;

/**
 *
 * @author CarlosFadul
 */
public class MdMascota {

    DbData dbData;

    public MdMascota() {
        this.dbData = new DbData();
    }

    public boolean crearMascota(Mascota m) {
        try ( Connection conn = DriverManager.getConnection(dbData.getUrl(), dbData.getUser(), dbData.getPassword())) {
            String query = "INSERT INTO mascota (codigo, nombre, annioNac, peso, especie, idCliente) VALUES (?,?,?,?,?,?)";
            PreparedStatement statement = conn.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
            statement.setString(1, m.getCodigo());
            statement.setString(2, m.getNombre());
            statement.setInt(3, m.getAnnioNac());
            statement.setInt(4, m.getPeso());
            statement.setString(5, m.getEspecie());
            statement.setInt(6, m.getIdCliente());
            int rowsInserted = statement.executeUpdate();
            if (rowsInserted > 0) {
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {

            return false;
        }

    }

    public Mascota buscarMascota(String codigo) {
        Mascota mc = null;
        try ( Connection conn = DriverManager.getConnection(dbData.getUrl(), dbData.getUser(), dbData.getPassword())) {
            String consulta = "SELECT * FROM mascota AS m WHERE m.codigo = ?";
            PreparedStatement statement = conn.prepareStatement(consulta, Statement.RETURN_GENERATED_KEYS);
            statement.setString(1, codigo);
            ResultSet result = statement.executeQuery();
            while (result.next()) {

                String cod = result.getString(2);
                String nom = result.getString(3);
                int annio = result.getInt(4);
                int peso = result.getInt(5);
                String especie = result.getString(6);
                int idCl = result.getInt(7);
                mc = new Mascota(cod, nom, annio, peso, especie, idCl);
            }
            return mc;
        } catch (Exception e) {
        }
        return mc;
    }

    public boolean actualizarMascota(Mascota m) {

        try ( Connection conn = DriverManager.getConnection(dbData.getUrl(), dbData.getUser(), dbData.getPassword())) {
            String consulta = "UPDATE mascota SET nombre = ?, annioNac = ?, peso = ?, especie = ?, idCliente = ? WHERE codigo = ?";
            PreparedStatement statement = conn.prepareStatement(consulta);
            statement.setString(1, m.getNombre());
            statement.setInt(2, m.getAnnioNac());
            statement.setInt(3, m.getPeso());
            statement.setString(4, m.getEspecie());
            statement.setInt(5, m.getIdCliente());
            statement.setString(6, m.getCodigo());
            int filasActualizadas = statement.executeUpdate();
            if (filasActualizadas > 0) {
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }
    
    public boolean borrarMascota(Mascota m){
        
        try ( Connection conn = DriverManager.getConnection(dbData.getUrl(), dbData.getUser(), dbData.getPassword())) {
            String consulta = "DELETE FROM mascota WHERE codigo = ?";
            PreparedStatement statement = conn.prepareStatement(consulta);
            statement.setString(1, m.getCodigo());
            int filasActualizadas = statement.executeUpdate();
            if (filasActualizadas > 0) {
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
       
    }
    
    public LinkedList<Mascota>  buscarTodosMascotas() {
        LinkedList<Mascota> listaMascotas = new LinkedList<>();
        
        try ( Connection conn = DriverManager.getConnection(dbData.getUrl(), dbData.getUser(), dbData.getPassword())) {
            String consulta = "SELECT * FROM mascota";
            PreparedStatement statement = conn.prepareStatement(consulta, Statement.RETURN_GENERATED_KEYS);
           
            ResultSet result = statement.executeQuery();
            while (result.next()) {
                int idPK = result.getInt(1);
                
                String codigo = result.getString(2);
                String nombre = result.getString(3);                
                int annioNac = result.getInt(4);
                int peso = result.getInt(5);
                String especie = result.getString(6);
                int idCliente = result.getInt(7);
                
                Mascota m = new Mascota(codigo, nombre, annioNac, peso, especie, idCliente);
                m.setIdPk(idPK);
                listaMascotas.add(m);
            }
            return listaMascotas;
        } catch (Exception e) {
        }
        return listaMascotas;
    }
    
    public LinkedList<MascotasporEspecie>  buscarEspecieMascotas() {
        LinkedList<MascotasporEspecie> mascotasporEspecie = new LinkedList<>();
        
        try ( Connection conn = DriverManager.getConnection(dbData.getUrl(), dbData.getUser(), dbData.getPassword())) {
            String consulta = "SELECT especie, count(especie) FROM mascota GROUP BY especie";
            PreparedStatement statement = conn.prepareStatement(consulta, Statement.RETURN_GENERATED_KEYS);
           
            ResultSet result = statement.executeQuery();
            while (result.next()) {
                MascotasporEspecie registro = new MascotasporEspecie();
                                
                String especie = result.getString(1);
                int cantidad = result.getInt(2);
                
                registro.setEspecie(especie);
                registro.setCantidadMascotasporEspecie(cantidad);
                mascotasporEspecie.add(registro);
            }
            return mascotasporEspecie;
        } catch (Exception e) {
        }
        return mascotasporEspecie;
    }
}
