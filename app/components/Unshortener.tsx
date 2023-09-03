import { unshorten } from '../(unshortener)/unshorten';
import { BsGlobeAmericas as IconGlobe } from 'react-icons/bs';
import { FaArrowsTurnRight as IconRedirect } from 'react-icons/fa6';
import { GrStatusUnknown as IconCode } from 'react-icons/gr';

interface Props {
  url: string;
}

export default async function Unshortener(props: Props) {
  let data;
  let err: string | undefined;

  try {
    data = await unshorten(props.url);
  } catch (error) {
    data = null;
    err = (error as Error).message;
  }

  return data ? (
    <div className="list-group">
      <div className="list-group-item">
        <div className="hstack gap-2 justify-content-between flex-wrap">
          <div className="fw-bold">
            <IconGlobe className="icon"></IconGlobe> Link:
          </div>
          <a href={data.url as string}>{data.url}</a>
        </div>
      </div>
      <div className="list-group-item">
        <div className="hstack gap-2 justify-content-between flex-wrap">
          <div className="fw-bold">
            <IconRedirect className="icon"></IconRedirect> Redirected:
          </div>{' '}
          {data.redirected ? 'Yes' : 'No'}
        </div>
      </div>
      <div className="list-group-item">
        <div className="hstack gap-2 justify-content-between flex-wrap">
          <div className="fw-bold">
            <IconCode className="icon"></IconCode> Status code:
          </div>{' '}
          {data.status}
        </div>
      </div>
    </div>
  ) : (
    <div className="alert alert-danger mb-0">
      <div className="vstack gap-2">
        <div className="fw-bold">Error unshortening</div>
        <div>{err}</div>
      </div>
    </div>
  );
}
