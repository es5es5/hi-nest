import { Injectable } from '@nestjs/common';
import { Movie } from './movies.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id:string): Movie {
    return this.movies.find(movie => movie.id === id)
  }

  deleteOne(id:string) {
    this.movies.filter(movie => movie.id !== id)
  }

  create(movie): string {
    const id = (Math.random() * 10000).toString()
    this.movies.push({
      id,
      ...movie
    })
    return id
  }
}
