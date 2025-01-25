export const queries = {
    // User Queries
    getUserByUsername: `
        query GetUserByUsername($username: citext!) {
            users(where: {username: {_eq: $username}}, limit: 1) {
                bio,
                books_count,
                created_at,
                followed_users_count,
                followers_count,
                id,
                librarian_roles,
                name,
                pro,
                username,
            }
        }
    `,
    getUserById: `
        query GetUserByUserId($userId: Int!) {
            users(where: {id: {_eq: $userId}}, limit: 1) {
                bio,
                books_count,
                created_at,
                followed_users_count,
                followers_count,
                id,
                librarian_roles,
                name,
                pro,
                username,
            }
        }
    `,

    // Book Queries
    getBookById: `
        query GetBookById($id: Int!) {
            book: books(where: {id: {_eq: $id}}) {
                audio_seconds,
                alternative_titles,
                book_series {
                    series {
                        id,
                        name,
                    },
                },
                compilation,
                contributions {
                    author {
                        id,
                        name,
                    },
                },
                default_audio_edition_id,
                default_cover_edition_id,
                default_ebook_edition_id,
                default_physical_edition_id,
                description,
                editions_count,
                id,
                image {
                    id,
                    url,
                },
                links,
                lists_count,
                pages,
                rating,
                ratings_count,
                release_date,
                release_year,
                reviews_count,
                slug,
                subtitle,
                title,
                users_count,
                users_read_count,
            }
        }
    `,
    getBooksByAuthorId: `
        query GetBooksByAuthorId($id: Int!) {
            authors(where: {id: {_eq: $id}}) {
                id,
                name,
                contributions(where: {contributable_type: {_eq: "Book"}}) {
                    book {
                        id,
                        title,
                        release_date,
                        release_year,
                        description,
                        cached_contributors,
                        alternative_titles,
                        rating,
                        ratings_count,
                    }
                }
            }
        }
    `,
    getBooksByListId: `
        query GetBooksByListId($list_id: Int!) {
            list_books(where: {list_id: {_eq: $list_id}}) {
                book {
                    id,
                    title,
                    release_date,
                    release_year,
                    description,
                    cached_contributors,
                    alternative_titles,
                    book_series {
                        series_id,
                    },
                    rating,
                    ratings_count,
                }
            }
        }
    `,
    getBooksByStatusAndUserId: `
        query getBooksByStatusAndUserId($status_id: Int!, $user_Id: Int!) {
            user_books(where: {status_id: {_eq: $status_id}, user_id: {_eq: $user_Id}}) {
                rating,
                book {
                    id,
                    title,
                    release_date,
                    release_year,
                    description,
                    cached_contributors,
                    alternative_titles,
                    book_series {
                        series_id,
                    },
                    rating,
                    ratings_count,
                }
            }
        }
    `,

    // Book Edition Queries
    getEditionById: `
        query GetEditionById($id: Int!) {
            edition: editions(where: {id: {_eq: $id}}) {
                alternative_titles,
                asin,
                audio_seconds,
                book_id,
                compilation,
                country_id,
                description,
                edition_format,
                edition_information,
                id,
                identifiers,
                image {
                    id,
                    url,
                },
                images {
                    id,
                    url,
                },
                isbn_10,
                isbn_13,
                language {
                    id,
                    language,
                },
                original_book_id,
                pages,
                physical_format,
                physical_information,
                publisher {
                    id,
                    name,
                },
                rating,
                release_date,
                release_year,
                subtitle,
                title,
                users_count,
                users_read_count,
            }
        }
    `,
    getEditionsByBookId: `
        query GetEditionsByBookId($book_id: Int!) {
            editions(where: {book_id: {_eq: $book_id}}) {
                alternative_titles,
                audio_seconds,
                compilation,
                country {
                    id,
                    name,
                },
                description,
                edition_format,
                edition_information,
                id,
                language {
                    id,
                    language,
                },
                lists_count,
                pages,
                physical_format,
                physical_information,
                publisher {
                    id,
                    name,
                },
                rating,
                reading_format {
                    id,
                },
                release_date,
                release_year,
                subtitle,
                title,
                users_read_count,
                users_count,
            }
        }
    `,

    // Author Queries
    getAuthorById: `
        query GetAuthorById($id: Int!) {
            author: authors(where: {id: {_eq: $id}}) {
                alternate_names,
                bio,
                books_count,
                born_date,
                born_year,
                death_date,
                death_year,
                id,
                image {
                    id,
                    url,
                },
                links,
                location,
                name,
                name_personal,
                slug,
                title,
            }
        }
    `,
    getAuthorsByName: `
        query GetAuthorsByName($name: String!) {
            authors(where: {name: {_eq: $name}}) {
                alternate_names,
                bio,
                books_count,
                id,
                name,
                name_personal,
                title,
            }
        }
    `,

    // List Queries
    getListById: `
        query getListById($id: Int!) {
            list: lists(where: {id: {_eq: $id}}) {
                books_count,
                description,
                featured,
                featured_profile,
                followers_count,
                id,
                likes_count,
                name,
                public,
                ranked,
                slug,
                updated_at,
                url,
                user_id,
            }
        }
    `,
    getListsByUserId: `
        query getListsByUserId($id: Int!) {
            users(where: {id: {_eq: $id}}) {
                id,
                username,
                lists { 
                    books_count,
                    description,
                    featured,
                    featured_profile,
                    followers_count,
                    id,
                    likes_count,
                    name,
                    public,
                    ranked,
                    updated_at,
                }
            }
        }
    `,
    getListsByUsername: `
        query getListsByUsername($username: citext!) {
            users(where: {username: {_eq: $username}}) {
                id,
                username,
                lists { 
                    books_count,
                    description,
                    featured,
                    featured_profile,
                    followers_count,
                    id,
                    likes_count,
                    name,
                    public,
                    ranked,
                    updated_at,
                }
            }
        }
    `,
    getListsByListName: `
        query GetBooksByListName($name: String!) {
            lists(where: {name: {_eq: $name}}) {
                books_count,
                description,
                featured,
                featured_profile,
                followers_count,
                id,
                likes_count,
                name,
                public,
                ranked,
                updated_at,
            }
        }
    `,
    
    // Publisher Queries
    getPublisherById: `
        query GetPublisherById($id: bigint!) {
            publisher: publishers(where: {id: {_eq: $id}}) {
                editions_count,
                id,
                name,
                parent_id,
                slug,
            }
        }
    `,
    getPublishersByName: `
        query GetPublishersByName($name: String!) {
            publishers(where: {name: {_eq: $name}}) {
                editions_count,
                id,
                name,
                parent_id,
            }
        }
    `,

    // Series Queries
    getSeriesById: `
        query GetSeriesById($id: Int!) {
            series(where: {id: {_eq: $id}}) {
                author {
                    id,
                    name,
                },
                books_count,
                description,
                id,
                identifiers,
                is_completed,
                name,
                primary_books_count,
                slug,
            }
        }
    `,
    getSeriesByAuthorId: `
        query GetSeriesByAuthorId($id: Int!) {
            series(where: {author_id: {_eq: $id}}) {
                books_count,
                description,
                id,
                identifiers,
                is_completed,
                name,
                primary_books_count,
            }
        }
    `,
      
    // Search Query
    search: `
        query Search($query: String!, $query_type: String!, $per_page: Int!, $page: Int!) {
            search(
                query: $query,
                query_type: $query_type,
                per_page: $per_page,
                page: $page
            ) {
                results
            }
        }
    `,
}; 