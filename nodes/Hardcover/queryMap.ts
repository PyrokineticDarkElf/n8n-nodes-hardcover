import { queries } from './GenericFunctions';

export const queryMap: QueryMapConfig = {
    user: {
        username: { 
            param: 'username', 
            query: queries.getUserByUsername 
        },
        userId: { 
            param: 'userId', 
            query: queries.getUserById 
        }
    },
    list: {
        id: {
            param: 'id',
            query: queries.getBooksByListId
        }
    },
    lists: {
        username: {
            param: 'username',
            query: queries.getListsByUserName
        },
        userId: {
            param: 'userId',
            query: queries.getListsByUserId
        },
        name: {
            param: 'name',
            query: queries.getListsByListName
        }
    },
    book: {
        id: {
            param: 'id',
            query: queries.getBookById
        }
    },
    books: {
        authorName: {
            param: 'name',
            query: queries.getBooksByAuthorName
        },
        authorId: {
            param: 'id',
            query: queries.getBooksByAuthorId
        },
        title: {
            param: 'title',
            query: queries.getBooksByTitle
        },
        status: {
            param: 'status',
            query: queries.getBooksByStatusAndUserId,
            additionalParams: {
                userId: { type: 'number', required: true }
            }
        }
    },
    edition: {
        id: {
            param: 'id',
            query: queries.getEditionById
        }
    },
    editions: {
        bookId: {
            param: 'id',
            query: queries.getEditionsByBookId
        }
    },
    author: {
        name: {
            param: 'name',
            query: queries.getAuthorByName
        },
        id: {
            param: 'id',
            query: queries.getAuthorById
        }
    },
    publisher: {
        name: {
            param: 'name',
            query: queries.getPublisherByName
        },
        id: {
            param: 'id',
            query: queries.getPublisherById
        }
    }
}; 