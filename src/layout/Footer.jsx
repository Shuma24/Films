function Footer () {
   return (
      <footer className="page-footer blue lighten-1">
         <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} by Shuma
            </div>
         </div>
    </footer>
   )
}

export { Footer }