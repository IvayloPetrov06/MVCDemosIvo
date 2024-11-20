using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.EntityFrameworkCore;
using System.Data.Entity;

namespace zad2_8_11.Models
{
    public class AppDBContext:DbContext
    {
        public DbSet<Flowers> Flowers { get; set; }

        public AppDBContext() : base("name=defaultConnection")
        {
        
        }
    }
}