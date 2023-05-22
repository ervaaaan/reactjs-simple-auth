import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import about from "images/about.png";

export default function About({ title }) {
  const { setTitle } = useOutletContext();

  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);

  return (
    <div className="container pt-2">
      <div className="row px-2">
        <div className="col-12 col-md-6">
          <h3 className="fw-normal">Lorem ipsum dolor sit amet</h3>
          <p>
            consectetur adipiscing elit. Nulla vel turpis turpis. Sed mauris
            mauris, aliquam sed ante ut, ullamcorper laoreet erat. Duis eu
            rutrum purus. Ut luctus bibendum tellus ut congue. Ut dolor nisi,
            maximus aliquam nulla sed, venenatis consequat arcu. Nulla hendrerit
            vehicula arcu. In consectetur, purus sed consequat posuere, orci
            nunc consequat ipsum, ut sodales urna massa at neque.
          </p>
          <p>
            Nulla eget tellus sodales, venenatis lacus eget, lobortis libero.
            Cras scelerisque metus non mi condimentum, ac lacinia enim
            fermentum. Sed arcu tortor, hendrerit a eros ac, eleifend porta
            enim. Suspendisse molestie enim quam, a maximus massa faucibus nec.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Integer tortor odio, iaculis eget lobortis
            iaculis, tempor nec ante. Aliquam venenatis nisl at ipsum commod
          </p>
        </div>
        <div className="col-12 col-md-6 text-end">
          <img src={about} alt="About" />
        </div>
      </div>
    </div>
  );
}
