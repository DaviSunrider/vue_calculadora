import React from "react";
import { AdicionaContato } from "../../containers/AdicionarContato";
import { FooterAdicionar } from "../../containers/Footer";
import { HeaderAdicionar } from "../../containers/Header";

const AdicionarContatos = () => (
  <>
    <HeaderAdicionar />
    <AdicionaContato />
    <FooterAdicionar />
  </>
);

export default AdicionarContatos;
