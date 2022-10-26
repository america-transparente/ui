import SearchFilter from "../../components/search/filters/SearchFilter";
import SearchSortBy from "../../components/search/filters/SearchSortBy";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

function RegulequeFilters() {
  const searchClient = instantMeiliSearch(
    "https://api.reguleque.cl",
    "1fadde29df3f086cba5cae2c43a3e68883df5388f2e1c91e8549c470d60dbba9", // Public Search API Key
    { keepZeroFacets: true }
  );

  return (
    <InstantSearch searchClient={searchClient} indexName="reguleque">
      <div className="grid grid-cols-5 gap-4 overflow-auto py-2">
        <SearchSortBy
          config={{
            items: [
              { label: "Por relevancia", value: "reguleque" },
              {
                label: "Sueldo (asc)",
                value: "reguleque/sort/remuneración_líquida_mensual:asc",
              },
              {
                label: "Sueldo (desc)",
                value: "reguleque/sort/remuneración_líquida_mensual:desc",
              },
              {
                label: "Grado EUS (asc)",
                value: "reguleque/sort/grado_eus:asc",
              },
              {
                label: "Grado EUS (desc)",
                value: "reguleque/sort/grado_eus:desc",
              },
            ],
          }}
          title="Ordenar por"
        />
        <SearchFilter
          title="Organismo"
          config={{
            attribute: "nombre_organismo",
            showMore: true,
            limit: 6,
          }}
        />
        <SearchFilter
          title="Tipo Contrato"
          config={{ attribute: "tipo_contrato" }}
        />
        <SearchFilter
          title="Año"
          config={{ attribute: "año", showMore: true, limit: 6 }}
        />
        <SearchFilter title="Mes" config={{ attribute: "mes", limit: 12 }} />
      </div>
    </InstantSearch>
  );
}

export default RegulequeFilters;
