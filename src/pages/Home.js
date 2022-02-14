import React from "react";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
      <main role="main" class="container-fluid">
      <Helmet>
        <title>Indice Genealogico | Inicio</title>
        <script type="text/javascript" src="../js/listados.js"></script>
      </Helmet>
        <div class="row">
          <div id="tabla_Tab" class="col-lg-9 blog-main">
            <div class="blog-post">
              <h2 class="blog-post-title">
                Indice de Imágenes en
                <a
                  class="font-italic"
                  target="_blank"
                  href="https://www.familysearch.org/records/images/search-results?page=1&place=5364"
                  >FamilySearch</a
                >
              </h2>
              <div
                class="fb-like"
                data-href="https://www.facebook.com/IndiceGenealogico"
                data-width=""
                data-layout="standard"
                data-action="like"
                data-size="small"
                data-share="true"
              ></div>
              <h4 class="font-italic">Cómo usar Indice Genealógico!</h4>
              <div class="twoColumns">
                <p class="mb-0">
                  La tabla muestra un extracto de índices parroquiales y civiles
                  de los estados Sucre, Monagas, Delta Amacuro y Nueva Esparta
                  en Venezuela. Usted podrá filtrar y ordenar dichos registros
                  para ayudarle en la búsqueda de sus antepasados. Una vez
                  localice el nombre de una persona de interes, haga clic en el
                  campo "Tipo" de evento, para ver un detalle del registro, y un
                  vínculo a la imagen en
                  <a target="_blank" href="https://www.familysearch.org"
                    >FamilySearch</a
                  >. En la tabla, el campo índice esta conformado por las dos
                  primeras letras del apellido paterno y el materno, permitiendo
                  filtrar registros de eventos de personas con apellidos
                  similares. Si usted posee un archivo con registros
                  parroquiales, puede cargarlos a la tabla para su análisis.
                </p>
              </div>
              <div id="title_div" class="card p-3 bg-light">
                <h3 id="title">
                  Registros Parroquiales y Civiles de Venezuela
                </h3>
                <p title="Actualización más reciente">
                  Última actualización: <b id="update"></b>
                </p>
              </div>

              <div>
                <form id="filtro" class="card p-3 bg-light">
                  <p>Filtro Adicional</p>
                  <div class="form-row">
                    <div class="form-group col-md-3">
                      <select id="filter-field" class="form-control">
                        <option></option>
                        <option value="Id">Individuos</option>
                        <option value="fid">ID Familiar</option>
                        <option value="pid">ID Padres</option>
                        <option value="typ">Tipo</option>
                        <option value="ns">Nombre(s)</option>
                        <option value="lns">Apellido(s)</option>
                        <option value="yy">Año</option>
                        <option value="sex">Sexo</option>
                        <option value="not">Notas</option>
                      </select>
                    </div>
                    <div class="form-group col-md-3">
                      <select id="filter-type" class="form-control">
                        <option value="like">contiene</option>
                        <option value="=">igual</option>
                        <option value="<">menor que</option>
                        <option value="<=">menor o igual que</option>
                        <option value=">">mayor que</option>
                        <option value=">=">mayor o igual que</option>
                        <option value="!=">diferente de</option>
                      </select>
                    </div>
                    <div class="form-group col-md-3">
                      <input
                        id="filter-value"
                        class="form-control"
                        type="text"
                      />
                    </div>
                    <div class="form-group col-md-3">
                      <button
                        id="filter-clear"
                        type="button"
                        class="btn btn-secondary filter"
                      >
                        Remover filtro Adicional
                      </button>
                    </div>
                  </div>
                </form>
                <form id="filtro" class="card p-3 bg-light">
                  <p id="secret">Filtro Geografico</p>
                  <div class="form-row">
                    <div id="st_filter" class="form-group col-md-4 col-sm-6">
                      <select id="filter-state" class="form-control">
                        <option value="" selected="true" disabled>
                          Seleccione un Estado
                        </option>
                      </select>
                    </div>
                    <div id="ct_filter" class="form-group col-md-4 col-sm-6">
                      <select id="filter-city" class="form-control">
                        <option value="" selected="true" disabled id="city-opt">
                          Primero, seleccione un estado
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-md-4">
                      <button
                        id="filter-clear2"
                        type="button"
                        class="btn btn-secondary filter"
                      >
                        Remover filtro
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div id="example-table"></div>
              <div class="d-flex justify-content-between">
                <div
                  class="fb-like"
                  data-href="https://www.indicegenealogico.net"
                  data-width=""
                  data-layout="button"
                  data-action="like"
                  data-size="small"
                  data-share="false"
                ></div>
                <a href="#" id="download-csv" class="badge badge-link"
                  >Descargar archivo csv</a
                >
              </div>
              <div class="row">
                <div class="col-md-6">
                  <h4>Registros en esta tabla</h4>
                  <p>
                    Los registros que se muestran en la tabla anterior,
                    corresponden a los siguientes eventos:
                  </p>

                  <div class="dropdown">
                    <a
                      href="https://www.familysearch.org/wiki/es/Indice_Geneal%C3%B3gico#Ciudades_con_.C3.8Dndices_Creados"
                      target="_blank"
                      class="btn btn-secondary"
                      >Ver en FamilySearch Wiki</a
                    >
                  </div>
                </div>

                {/* Proyectos actuales */}
                <div class="col-md-6">
                  <b>Proyectos Actuales en Progreso</b>
                  <table class="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Estado</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Evento</th>
                        <th scope="col">Periodo</th>
                      </tr>
                    </thead>
                    <tbody id="progress"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <aside class="col-lg-3 blog-sidebar">
            <div
              id="facebook"
              class="fb-page"
              data-href="https://www.facebook.com/IndiceGenealogico/"
              data-tabs="timeline, events, messages"
              data-width="500"
              data-height="450"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/IndiceGenealogico/"
                class="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/IndiceGenealogico/"
                  >Índice Genealógico</a
                >
              </blockquote>
            </div>
            <div id="aside">
              <div class="card card_bot">
                <div id="historial" class="card-body overflow-auto">
                  <h5 class="card-title">Actualizaciones</h5>
                  <ul id="lista" class="list-group list-group-flush up"></ul>
                </div>
              </div>

              <div id="load_file" class="card card_bot">
                <div class="card-body">
                  <h5 class="card-title">Cargar archivo local de índice</h5>
                  <p class="card-text">
                    Archivos de registros locales podrian estar disponibles con
                    su consultor de Historia Familiar. Haga clic en el botón
                    para cargar un archivo local de datos.
                  </p>
                  <a
                    href="#title"
                    id="file-load-trigger"
                    class="btn btn-primary"
                    >Cargar Archivo local</a
                  >
                </div>
              </div>
              <div id="leyenda" class="card card_bot">
                <div class="card-body">
                  <h5 class="card-title">Leyenda</h5>
                  <p class="card-text">En construcción...</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
  );
}

export default Home;
