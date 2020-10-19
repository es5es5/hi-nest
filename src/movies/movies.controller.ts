import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll () {
    return 'This will return all MOVIE!'
  }

  @Get('/:id')
  getOne (@Param('id') id:String) {
    return `This will ONE: ${id}`
  }

  @Post()
  create() {
    return 'This will create a movie.'
  }

  @Delete('/:id')
  delete(@Param('id') id: String) {
    return `This will delete a movie: ${id}`
  }

  @Patch('/:id')
  patch(@Param('id') id: String) {
    return `This will patch a movie: ${id}`
  }
}