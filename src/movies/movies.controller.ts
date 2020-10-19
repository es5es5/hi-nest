import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

  constructor(readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll()
  }

  @Get('search')
  search (@Query('year') year: string) {
    return `search: ${year}`
  }

  @Get('/:id')
  getOne (@Param('id') id:string): Movie {
    return this.moviesService.getOne(id)
  }

  @Post()
  create(@Body() movie): string {
    return this.moviesService.create(movie)
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.moviesService.deleteOne(id)
  }

  @Patch('/:id')
  patch(@Param('id') id: string) {
    return `This will delete a movie: ${id}`
  }
}
