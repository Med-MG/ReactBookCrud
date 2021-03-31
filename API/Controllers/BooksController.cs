using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public BooksController(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetBooks()
        {

            return await _context.Books.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(Guid Id)
        {
            return await _context.Books.FindAsync(Id);
        }

        [HttpPost]
        public async Task<IActionResult> CreateBook(Book book)
        {

            await _context.Books.AddAsync(book);
            return Ok(await _context.SaveChangesAsync());
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBook(Guid Id, Book book)
        {
            book.Id = Id;
            var Editbook = await _context.Books.FindAsync(Id);

            _mapper.Map(book, Editbook);

            return Ok(await _context.SaveChangesAsync());
            
           

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(Guid Id) {
           var delBook =  await _context.Books.FindAsync(Id);

            _context.Remove(delBook);

            return Ok(await _context.SaveChangesAsync());

        }

    }
}