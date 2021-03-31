using System;

namespace Domain
{
    public class Book
    {
            
        public Guid Id { get; set; }
        public String Title { get; set; }
        public DateTime PublishDate { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string AuthorName { get; set; }
 
    }
}