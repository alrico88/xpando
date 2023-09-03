import { BsGithub as IconGithub } from 'react-icons/bs';
import { BsFilePerson as IconPerson } from 'react-icons/bs';
import { BiCoffee as IconCoffee } from 'react-icons/bi';

export default function Credits() {
  return (
    <footer className="py-3 ">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="hstack gap-2 flex-wrap justify-content-center">
              <div>
                <IconPerson className="icon"></IconPerson> Created by{' '}
                <a href="https://alrico.es">Alberto Rico</a>
              </div>
              <div>
                <IconGithub className="icon"></IconGithub> Source code in{' '}
                <a href="https://github.com/alrico88/xpando">Github</a>
              </div>
              <div>
                <IconCoffee className="icon"></IconCoffee> Found it useful?{' '}
                <a href="https://www.buymeacoffee.com/albertorico">
                  Support me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
