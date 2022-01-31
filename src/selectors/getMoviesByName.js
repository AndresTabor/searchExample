export const getMoviesByName = ( name = '', movies ) => {


    name = name.toLocaleLowerCase();
    return movies.filter( movie => movie.name.toLocaleLowerCase().includes( name )  );

}