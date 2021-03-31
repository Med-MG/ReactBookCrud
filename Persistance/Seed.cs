using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistance
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Books.Any()) return;
            
            var books = new List<Book>
            {
                new Book
                {
                    Title = "In Search of Lost Time by Marcel Proust",
                    PublishDate = DateTime.Now.AddMonths(-2),
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                    Category = "Fiction",
                    AuthorName = "Marcel Proust"
                },
                new Book
                {
                    Title = "Ulysses by James Joyce",
                    PublishDate = DateTime.Now.AddMonths(-1),
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                    Category = "culture",
                    AuthorName = "James Joyce"
                },
                new Book
                {
                    Title = "Don Quixote by Miguel de Cervantes",
                    PublishDate = DateTime.Now.AddMonths(1),
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                    Category = "Drama",
                    AuthorName = "Cervantes"
                },
                new Book
                {
                    Title = "One Hundred Years of Solitude by Gabriel Garcia ",
                    PublishDate = DateTime.Now.AddMonths(2),
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                    Category = "Philosophy",
                    AuthorName = "Gabriel Garcia"
                }
            };

            await context.Books.AddRangeAsync(books);
            await context.SaveChangesAsync();
        }
    }
}