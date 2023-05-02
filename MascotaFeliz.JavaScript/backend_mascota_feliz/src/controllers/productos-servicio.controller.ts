import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ProductosServicio} from '../models';
import {ProductosServicioRepository} from '../repositories';

export class ProductosServicioController {
  constructor(
    @repository(ProductosServicioRepository)
    public productosServicioRepository : ProductosServicioRepository,
  ) {}

  @post('/productos-servicios')
  @response(200, {
    description: 'ProductosServicio model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProductosServicio)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductosServicio, {
            title: 'NewProductosServicio',
            exclude: ['id'],
          }),
        },
      },
    })
    productosServicio: Omit<ProductosServicio, 'id'>,
  ): Promise<ProductosServicio> {
    return this.productosServicioRepository.create(productosServicio);
  }

  @get('/productos-servicios/count')
  @response(200, {
    description: 'ProductosServicio model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProductosServicio) where?: Where<ProductosServicio>,
  ): Promise<Count> {
    return this.productosServicioRepository.count(where);
  }

  @get('/productos-servicios')
  @response(200, {
    description: 'Array of ProductosServicio model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProductosServicio, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProductosServicio) filter?: Filter<ProductosServicio>,
  ): Promise<ProductosServicio[]> {
    return this.productosServicioRepository.find(filter);
  }

  @patch('/productos-servicios')
  @response(200, {
    description: 'ProductosServicio PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductosServicio, {partial: true}),
        },
      },
    })
    productosServicio: ProductosServicio,
    @param.where(ProductosServicio) where?: Where<ProductosServicio>,
  ): Promise<Count> {
    return this.productosServicioRepository.updateAll(productosServicio, where);
  }

  @get('/productos-servicios/{id}')
  @response(200, {
    description: 'ProductosServicio model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProductosServicio, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ProductosServicio, {exclude: 'where'}) filter?: FilterExcludingWhere<ProductosServicio>
  ): Promise<ProductosServicio> {
    return this.productosServicioRepository.findById(id, filter);
  }

  @patch('/productos-servicios/{id}')
  @response(204, {
    description: 'ProductosServicio PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductosServicio, {partial: true}),
        },
      },
    })
    productosServicio: ProductosServicio,
  ): Promise<void> {
    await this.productosServicioRepository.updateById(id, productosServicio);
  }

  @put('/productos-servicios/{id}')
  @response(204, {
    description: 'ProductosServicio PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() productosServicio: ProductosServicio,
  ): Promise<void> {
    await this.productosServicioRepository.replaceById(id, productosServicio);
  }

  @del('/productos-servicios/{id}')
  @response(204, {
    description: 'ProductosServicio DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.productosServicioRepository.deleteById(id);
  }
}
