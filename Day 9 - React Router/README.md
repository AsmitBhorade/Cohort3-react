Wrap App by BrowserRouter
Use Routes comp and then inside it Route comp to set path and element of induvidual comp
for navigation to happen like on clicking home we should go to /home, then wrap Home in Navlink comp and pass id={/home} to it.

Why not anchor tag - as it reloades the entire page

if we hvae to accept children in anu routes like /home/details then we have to add a outlet comp in home, and make one more route under home route.
Note:- in path of child i.e. detail dont add /

