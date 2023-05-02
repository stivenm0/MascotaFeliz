/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Modelo;

import Clases.Mascota;
import Clases.Pago;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.LinkedList;

/**
 *
 * @author Dell
 */
public class MdPago {

    DbData dbData;

    public MdPago() {
        this.dbData = new DbData();
    }

    public boolean crearPago(Pago p) {
        System.out.println("Hola");
        System.out.println("fecha de pago: " + p.getFechaPago() + "numero cuotas: " + p.getNumeroCuotas());
        System.out.println("id mascota: " + p.getIdMascota() + "id plan: " + p.getIdPlan());
        try ( Connection conn = DriverManager.getConnection(dbData.getUrl(), dbData.getUser(), dbData.getPassword())) {

            String query = "INSERT INTO pago (fechaPago, numeroCuotas, idMascota, idPlan) VALUES (?,?,?,?)";
            PreparedStatement statement = conn.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
            System.out.println("fecha pago en modelo: " + p.getFechaPago());
            statement.setString(1, p.getFechaPago());
            statement.setInt(2, p.getNumeroCuotas());
            statement.setInt(3, p.getIdMascota());
            statement.setInt(4, p.getIdPlan());

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

    public Pago buscarPago(String id) {
        Pago pg = null;
        try ( Connection conn = DriverManager.getConnection(dbData.getUrl(), dbData.getUser(), dbData.getPassword())) {
            String consulta = "SELECT * FROM pago AS p WHERE p.idPago = ?";
            PreparedStatement statement = conn.prepareStatement(consulta, Statement.RETURN_GENERATED_KEYS);
            statement.setInt(1, Integer.parseInt(id));
            ResultSet result = statement.executeQuery();
            while (result.next()) {

                String fec = result.getString(2);
                int numCuotas = result.getInt(3);
                int idMasc = result.getInt(4);
                int idPl = result.getInt(5);
                
                pg = new Pago(fec, numCuotas, idMasc, idPl);
            }
            return pg;
        } catch (Exception e) {
        }
        return pg;
    }
    
    public boolean actualizarPago(Pago p) {

        try ( Connection conn = DriverManager.getConnection(dbData.getUrl(), dbData.getUser(), dbData.getPassword())) {
            String consulta = "UPDATE pago SET fechaPago = ?, numeroCuotas = ?, idMascota = ?, idPlan = ? WHERE idPago = ?";
            PreparedStatement statement = conn.prepareStatement(consulta);
            statement.setString(1, p.getFechaPago());
            statement.setInt(2, p.getNumeroCuotas());
            statement.setInt(3, p.getIdMascota());
            statement.setInt(4, p.getIdPlan());
            statement.setInt(5, p.getIdPk());
            
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
    
    public boolean borrarPago(Pago p){
        
        try ( Connection conn = DriverManager.getConnection(dbData.getUrl(), dbData.getUser(), dbData.getPassword())) {
            String consulta = "DELETE FROM pago WHERE idPago = ?";
            PreparedStatement statement = conn.prepareStatement(consulta);
            statement.setInt(1, p.getIdPk());
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

    public LinkedList<Mascota> buscarTodosMascotas() {
        LinkedList<Mascota> listaMascotas = new LinkedList<>();

        try ( Connection conn = DriverManager.getConnection(dbData.getUrl(), dbData.getUser(), dbData.getPassword())) {
            String consulta = "SELECT * FROM mascota";
            PreparedStatement statement = conn.prepareStatement(consulta, Statement.RETURN_GENERATED_KEYS);

            ResultSet result = statement.executeQuery();
            while (result.next()) {
                int idPk = result.getInt(1);

                String codigo = result.getString(2);
                String nombre = result.getString(3);
                int annio = result.getInt(4);
                int peso = result.getInt(5);
                String especie = result.getString(6);
                int idCl = result.getInt(7);

                Mascota m = new Mascota(codigo, nombre, annio, peso, especie, idCl);
                m.setIdPk(idPk);

                listaMascotas.add(m);
            }
            return listaMascotas;
        } catch (Exception e) {
        }
        return listaMascotas;
    }
    
    

}
