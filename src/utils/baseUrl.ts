const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8888' : 'http://todo.production.url';

export default baseUrl;