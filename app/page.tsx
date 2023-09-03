import Credits from './components/Credits';
import Unshortener from './components/Unshortener';
import { FiArrowRight as IconRight } from 'react-icons/fi';
import { Russo_One } from 'next/font/google';

const titleFont = Russo_One({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Index({
  searchParams,
}: {
  searchParams: { site?: string };
}) {
  let site = searchParams.site;

  return (
    <>
      <div className="d-flex flex-column h-100">
        <main className="bg-intense">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col">
                <div className="row py-4">
                  <div className="col">
                    <h1 className="fw-bold display-3" style={titleFont.style}>
                      <a href="/" className="link-unstyled">
                        Xpando
                      </a>
                    </h1>
                    <div className="lead">Unshorten any URL</div>
                  </div>
                </div>
                <div className="row justify-content-center mb-5">
                  <div className="col-md-6 col-12">
                    <form className="form" method="GET">
                      <div className="form-group">
                        <label className="form-label" htmlFor="site">
                          URL to resolve
                        </label>
                        <div className="vstack gap-2">
                          <input
                            autoFocus={site === ''}
                            className="form-control form-control-lg text-center"
                            type="text"
                            id="site"
                            name="site"
                            defaultValue={site}
                            placeholder="https://ex.ample/1e233"
                          />
                          <button className="btn btn-primary btn-lg">
                            Go <IconRight className="icon"></IconRight>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <section className="bg-less flex-grow-1">
          <div className="container text-center">
            <div className="row py-5">
              <div className="col">
                <div className="vstack gap-3">
                  {site && (
                    <div className="row justify-content-center">
                      <div className="col-md-6 col-12">
                        <Unshortener url={site}></Unshortener>
                      </div>
                    </div>
                  )}
                  <div className="row text-center justify-content-center">
                    <div className="col-md-6 col-12">
                      For API usage, use{' '}
                      <code>
                        https://xtendo.vercel.app/api/resolve?site=
                        {site ?? 'YOUR_URL_HERE'}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Credits></Credits>
      </div>
    </>
  );
}
