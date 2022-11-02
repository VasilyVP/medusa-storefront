import { graphql, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Helmet } from "react-helmet"
import CollectionPreview from "../components/categories/collection-preview"
import ProductListItem from "../components/products/product-list-item"
import Grid from "../components/utility/grid"
import SearchEngineOptimization from "../components/utility/seo"
import { useCollections } from "../hooks/use-collections"

const IndexPage = ({ data }) => {
  const { products, collections } = data
  const prods = data.products.edges.map(edge => edge.node)
  const collectionPreviews = useCollections(collections, products)

  return (
    <div className='bg-ui-light'>
      <Helmet>
        <link rel="icon" type="image/x-icon" href="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/622ad2941c5d76ca2369e4e9_barneyface_favicon_32.png" />
      </Helmet>
      <SearchEngineOptimization title="Home" />
      <div className="bg-ui-light pb-12 lg:pb-0 w-full flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-1">
        <div className="relative w-9/12"> {/* max-w-screen-2xl mx-auto */}
          <StaticImage
            src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/61f5a1d1154ef76dff4e2632_barneybed_hero.jpg"
            alt="A black Medusa hoodie and a white Medusa coffee mug"
            placeholder="tracedSVG"
            className="w-full h-auto rounded-sm" /* lg:w-1/2 */
          />
          <div className="absolute bottom-16 right-16">
            {/* <h1 className="text-4xl">Cools</h1> */}
            <p className="mt-2 text-lg font-normal text-[#e9eae5]">
              Explore for your friend comfort
            </p>
            <div className="flex justify-end">
              <button className="btn-ui bg-[#e9eae5] text-[#636363] border-transparent mt-4 min-w-full lg:min-w-0" onClick={() => navigate('/products')}>
                To soft beds
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="layout-base my-12 min-h-0 w-9/12">
        <Grid
          title={"Featured"}
          cta={{ to: "/products", text: "Browse all products" }}
        >
          {prods.slice(0, 4).map(p => {
            return <ProductListItem product={p} key={p.handle} />
          })}
        </Grid>
        {/* <div className="mt-12">
          <Grid
            title="Shop by collection"
            cta={{ to: "/collections", text: "Browse all collections" }}
          >
            {collectionPreviews.slice(0, 4).map(collection => {
              return (
                <CollectionPreview
                  key={collection.id}
                  collection={collection}
                />
              )
            })}
          </Grid>
        </div> */}
      </div>
    </div>
  )
}
export const query = graphql`
  query {
    products: allMedusaProducts {
      edges {
        node {
          handle
          title
          collection_id
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          variants {
            prices {
              amount
              currency_code
            }
          }
        }
      }
    }
    collections: allMedusaCollections {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`

export default IndexPage
