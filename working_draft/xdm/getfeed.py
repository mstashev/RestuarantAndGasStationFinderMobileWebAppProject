import cherrypy,urllib,sys,os.path
current_dir = os.path.dirname(os.path.abspath(__file__))
class Root(object):
	def index(self):
		f= urllib.urlopen("http://science.iupui.edu/events.xml").read()
		
		return f.replace('xml:base="http://science.iupui.edu/events.xml" xmlns:dc="http://purl.org/dc/elements/1.1/"','');
		
	index.exposed = True
def main():
	conf = {'/easyXDM': {'tools.staticdir.on': True,
                    'tools.staticdir.dir': os.path.join(current_dir, 'easyXDM')}}
	cherrypy.quickstart(Root(),'/',config=conf)
	
if __name__=="__main__":
	main()