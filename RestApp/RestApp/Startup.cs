using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(RestApp.Startup))]
namespace RestApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
