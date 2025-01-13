import type {
    IExecuteFunctions,
    IHookFunctions,
    ILoadOptionsFunctions,
    IRequestOptions,
    JsonObject,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

export async function makeGraphQLRequest(
    this: IExecuteFunctions | IHookFunctions | ILoadOptionsFunctions,
    query: string,
    variables: object,
): Promise<any> {
    try {
        const credentials = await this.getCredentials('hardcoverApi');
        const personalAccessToken = credentials.personalAccessToken as string;

        const options: IRequestOptions = {
            headers: {
                'Authorization': `Bearer ${personalAccessToken}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: {
                query,
                variables,
            },
            uri: 'https://api.hardcover.app/v1/graphql',
            json: true,
        };

        return await this.helpers.requestWithAuthentication.call(this, 'hardcoverApi', options);
    } catch (error) {
        throw new NodeApiError(this.getNode(), error as JsonObject);
    }
}

export const queries = {
    // User Queries
    getUserByUsername: `
        query GetUserByUsername($username: citext!) {
            users(where: {username: {_eq: $username}}, limit: 1) {
                id,
                username,
                books_count,
                followers_count,
                followed_users_count,
            }
        }
    `,
    getUserById: `
        query GetUserByUserId($userId: Int!) {
            users(where: {id: {_eq: $userId}}, limit: 1) {
                id,
                username,
                books_count,
                followers_count,
                followed_users_count,
            }
        }
    `,

    // Book Queries
    getBookById: `
        query GetBookById($id: Int!) {
            book: books(where: {id: {_eq: $id}}) {
                id
                alternative_titles
                book_series {
                    series {
                        id
                        name
                    }
                }
                default_audio_edition_id
                default_cover_edition_id
                default_ebook_edition_id
                default_physical_edition_id
                description
                image {
                    url
                }
                pages
                audio_seconds
                rating
                ratings_count
                release_date
                reviews_count
                slug
                subtitle
                title
                users_count
                users_read_count
            }
        }
    `,

    // Books Queries
    getBooksByTitle: `
    query GetBooksByTitle($title: String!) {
        books(
            order_by: {users_read_count: desc}
            where: {title: {_eq: $title}}
            limit: 5
        ) {
            id
            alternative_titles
            book_series {
                series {
                    id
                    name
                }
            }
            default_audio_edition_id
            default_cover_edition_id
            default_ebook_edition_id
            default_physical_edition_id
            description
            image {
                url
            }
            pages
            audio_seconds
            rating
            ratings_count
            release_date
            reviews_count
            slug
            subtitle
            title
            users_count
            users_read_count
        }
    }
`,
    getBooksByAuthorName: `
        query GetBooksByAuthorName($authorName: String!) {
            authors(where: {name: {_eq: $authorName}}) {
                name,
                id,
                alternate_names
                books_count,
                state
                location
                born_date
                born_year
                death_date
                death_year
                contributions(where: {contributable_type: {_eq: "Book"}}) {
                    book {
                        id
                        alternative_titles
                        book_series {
                            series {
                                id
                                name
                            }
                        }
                        default_audio_edition_id
                        default_cover_edition_id
                        default_ebook_edition_id
                        default_physical_edition_id
                        description
                        image {
                            url
                        }
                        pages
                        audio_seconds
                        rating
                        ratings_count
                        release_date
                        reviews_count
                        slug
                        subtitle
                        title
                        users_count
                        users_read_count
                    }
                }
            }
        }
    `,
    getBooksByAuthorId: `
        query GetBooksByAuthorId($authorId: Int!) {
            authors(where: {id: {_eq: $authorId}}) {
                name,
                id,
                alternate_names
                books_count,
                state
                location
                born_date
                born_year
                death_date
                death_year
                contributions(where: {contributable_type: {_eq: "Book"}}) {
                    book {
                        id
                        alternative_titles
                        book_series {
                            series {
                                id
                                name
                            }
                        }
                        default_audio_edition_id
                        default_cover_edition_id
                        default_ebook_edition_id
                        default_physical_edition_id
                        description
                        image {
                            url
                        }
                        pages
                        audio_seconds
                        rating
                        ratings_count
                        release_date
                        reviews_count
                        slug
                        subtitle
                        title
                        users_count
                        users_read_count
                    }
                }
            }
        }
    `,
    getBooksByListId: `
        query GetBooksByListId($id: Int!) {
            lists(where: {id: {_eq: $id}}) {
                name,    
                id,
                list_books {
                    book {
                        id
                        alternative_titles
                        book_series {
                            series {
                                id
                                name
                            }
                        }
                        default_audio_edition_id
                        default_cover_edition_id
                        default_ebook_edition_id
                        default_physical_edition_id
                        description
                        image {
                            url
                        }
                        pages
                        audio_seconds
                        rating
                        ratings_count
                        release_date
                        reviews_count
                        slug
                        subtitle
                        title
                        users_count
                        users_read_count
                    }
                }
            }
        }
    `,

    // Books by status
    getBooksByStatusAndUserId: `
        query getBooksByStatusAndUserId($status: Int!, $userId: Int!) {
            user_books(where: {status_id: {_eq: $status}, user_id: {_eq: $userId}}) {
                rating,
                    book {
                        id
                        alternative_titles
                        book_series {
                            series {
                                id
                                name
                            }
                        }
                        default_audio_edition_id
                        default_cover_edition_id
                        default_ebook_edition_id
                        default_physical_edition_id
                        description
                        image {
                            url
                        }
                        pages
                        audio_seconds
                        rating
                        ratings_count
                        release_date
                        reviews_count
                        slug
                        subtitle
                        title
                        users_count
                        users_read_count
                    }
            }
        }
    `,

    // Book Edition Queries
    getEditionById: `
        query GetEditionById($id: Int!) {
            edition: editions(where: {id: {_eq: $id}}) {
                id
                book {
                    id
                    alternative_titles
                    book_series {
                        series {
                            id
                            name
                        }
                    }
                    default_audio_edition_id
                    default_cover_edition_id
                    default_ebook_edition_id
                    default_physical_edition_id
                    description
                    image {
                        url
                    }
                    pages
                    audio_seconds
                    rating
                    ratings_count
                    release_date
                    reviews_count
                    slug
                    subtitle
                    title
                    users_count
                    users_read_count
                }
                country {
                    name
                }
                edition_format
                image {
                    url
                }
                isbn_10
                isbn_13
                language {
                    language
                }
                pages
                audio_seconds
                publisher {
                    id
                    name
                    slug
                }
                rating
                release_date
                subtitle
                title
                users_count
            }
        }
    `,

    // Book Editions Queries
    getEditionsByTitle: `
        query GetEditionsByTitle($title: String!) {
            editions(where: {title: {_eq: $title}}) {
                id
                country {
                    name
                }
                edition_format
                image {
                    url
                }
                isbn_10
                isbn_13
                language {
                    language
                }
                pages
                audio_seconds
                publisher {
                    id
                    name
                    slug
                }
                rating
                release_date
                subtitle
                title
                users_count
            }
        }
    `,
    getEditionsById: `
        query GetEditionsById($id: Int!) {
            edition:editions(where: {id: {_eq: $id}}) {
                id
                country {
                    name
                }
                edition_format
                image {
                    url
                }
                isbn_10
                isbn_13
                language {
                    language
                }
                pages
                audio_seconds
                publisher {
                    id
                    name
                    slug
                }
                rating
                release_date
                subtitle
                title
                users_count
            }
        }
    `,

    // Author Queries
    getAuthorByName: `
        query GetAuthorByName($name: String!) {
            authors(where: {name: {_eq: $name}}) {
                name,
                id,
                alternate_names
                books_count,
                state
                location
                born_date
                born_year
                death_date
                death_year
            }
        }
    `,
    getAuthorById: `
        query GetAuthorById($id: Int!) {
            author: authors(where: {id: {_eq: $id}}) {
                name,
                id,
                alternate_names
                books_count,
                state
                location
                born_date
                born_year
                death_date
                death_year
            }
        }
    `,

    // Character Queries
    getCharacterByName: `
        query GetCharacterByName($name: String!) {
            characters(where: {name: {_eq: $name}}) {
                name,
                id,
                state,
                biography,
                created_at,
                updated_at,
                image_id,
                __typename,
                cached_tags,
                openlibrary_url,
                canonical_books_count,
            }
        }
    `,

    // Lists Queries
    getListsByUserId: `
        query getListsByUserId($userId: Int!) {
            users(where: {id: {_eq: $userId}}) {
                id,
                username,
                lists { 
                    name,
                    id,
                    books_count,
                }
            }
        }
    `,
    getListsByUserName: `
        query getListsByUserName($username: citext!) {
            users(where: {username: {_eq: $username}}) {
                id,
                username,
                lists { 
                    name,
                    id,
                    books_count,
                }
            }
        }
    `,
    getListsByListName: `
    query GetBooksByListName($name: String!) {
        lists(where: {name: {_eq: $name}}) {
            name,    
            id,
            list_books {
                book {
                    title,
                    id,
                    slug,
                    users_read_count,
                    contributions {
                        author_id,
                        author {
                            id,
                            name
                        }
                    }
                }
            }
        }
    }
`,
    // Search Query
    search: `
        query Search($query: String!, $queryBy: String!, $perPage: Int!, $page: Int!) {
            search(
                query: $query,
                query_type: $queryBy,
                per_page: $perPage,
                page: $page
            ) {
                results
            }
        }
    `,
}; 