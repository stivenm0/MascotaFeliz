import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {ProductosServicio, ProductosServicioRelations} from '../models';

export class ProductosServicioRepository extends DefaultCrudRepository<
  ProductosServicio,
  typeof ProductosServicio.prototype.id,
  ProductosServicioRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(ProductosServicio, dataSource);
  }
}
