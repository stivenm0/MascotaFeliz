import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Usuario} from '../models';
import {UsuarioRepository} from '../repositories';
const generador = require('password-generator');
const cryptoJS= require('crypto-js');
const jwt= require('jsonwebtoken');
import {llaves} from '../config/llaves'

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */
  @repository(UsuarioRepository)
  public personaRepository: UsuarioRepository
    ) {}

  /*
   * Add service methods here
   */

  generarClave(){
    const clave  = generador(8, false);
    return clave;
  }

  cifrarClave(clave:string){
    const claveCifrada= cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  identificarPersona(usuario: string, contrasena:string){
    try {
      const p = this.personaRepository.findOne({where: {correo: usuario, contrasena :contrasena}})
      if(p){
        return p;
      }
      return false;

    } catch (error) {
      return false;
    }
  }

  generarTokenJWT(usuario: Usuario){
    const token = jwt.sign({
      data: {
        id: usuario.id,
        correo: usuario.correo,
        nombre: usuario.nombre,
      }
    },
        llaves.claveJWT)
        return token;
      }

      validarTokenJWT(token: string){
        try {
          const datos = jwt.verify(token, llaves.claveJWT);
          return datos
        } catch (error) {
          return false;
        }
      }

}
