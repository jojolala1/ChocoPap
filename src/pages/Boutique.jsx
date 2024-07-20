import { useEffect, useState } from "react";
import Products from "../components/Products";


export default function Boutique() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://firebasestorage.googleapis.com/v0/b/choco-pap-c76a8.appspot.com/o/products.json?alt=media&token=5bed1d65-5379-49b1-8fc8-33b67a845a40');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching the products', error);
            }
        };

        fetchProducts();
    }, []);

    
    const optionPrice = (max, signe="",selected=1) => {
        const options = []
        for(let  i= 1; i <= max ;i++ ) {
            if(selected === i){
             options.push(<option selected key={i} value={i}>{i+signe}</option>)

            }else{
             options.push(<option key={i} value={i}>{i+signe}</option>)
            }
        }
        return options
    }

    const [categorys, setCategorys] = useState(
        {
            "tous": true,
            "blanc": true,
            "lait": true,
            "noir": true,
            "caramel": true,
            "noix": true,
            "fruit": true,
            "liqueur": true
          }
    )



    const visibleProduct = products.filter(product => {
        return Object.keys(categorys).every(category => {
            return !product.category[category] || categorys[category];
        });
    });



    const modifyCategory = (changeCategory) => {
        setCategorys((newCategorys)=> ({
            ...newCategorys,
            ...changeCategory 
            
        }
    ))
    }

   const [bool, setBool] = useState(false)

    const everyToggleCategory = () => {
        const newCategory = {}

            for (let i in categorys){
                    newCategory[i] = bool   
                modifyCategory(newCategory)

        }
        setBool(!bool)
    }

    return (
        <div>
            <h1 className="jauneT my-5 text-center display-3">BOUTIQUE</h1>
            <div className=" d-flex flex-column flex-md-row pt-5">
                <div className="filtre ">
                <div className="container marronCBg p-5 ps-2 pt-0 marronFBT">
                    <p className="blancT mb-3 mt-2 title h5  ">FILTRE</p>
                    <p className="blancT title h3 text-decoration-underline mt-5 mb-4">Catégories</p>

                    <form action="blancT" className="d-flex flex-column">
                        
                        <div className="">
                            <input className="form-check-input me-2 check" type="checkbox" id="tous" onChange={() => modifyCategory(everyToggleCategory()) } defaultChecked={categorys.tous} />
                            <label className="form-check-label blancT  " htmlFor="tous" >
                            Tous
                            </label>
                        </div>
                        

                        <div className="">
                            <input className="form-check-input me-2 check" type="checkbox" id="chocolat-blanc" onChange={() => modifyCategory({blanc: !categorys.blanc }) } checked={categorys.blanc}/>
                            <label className="form-check-label blancT" htmlFor="chocolat-blanc">
                            Chocolat blanc
                            </label>
                        </div>

                        <div className="">
                            <input className="form-check-input me-2 check" type="checkbox" id="chocolatlait" onChange={() => modifyCategory({lait: !categorys.lait }) } checked={categorys.lait}/>
                            <label className="form-check-label blancT" htmlFor="chocolatlait">
                            Chocolat au lait
                            </label>
                        </div>

                        <div className="">
                            <input className="form-check-input me-2 check" type="checkbox" id="chocolatlait" onChange={() => modifyCategory({noir: !categorys.noir }) } checked={categorys.noir}/>
                            <label className="form-check-label blancT" htmlFor="chocolatlait">
                            Chocolat noir
                            </label>
                        </div>

                        <div className="">
                            <input className="form-check-input me-2 check" type="checkbox" id="noix/noisette" onChange={() => modifyCategory({noix: !categorys.noix }) } checked={categorys.noix}/>
                            <label className="form-check-label blancT" htmlFor="noix/noisette">
                            Noix/Noisette
                            </label>
                        </div>

                        <div className="">
                            <input className="form-check-input me-2 check" type="checkbox" id="fruit" onChange={() => modifyCategory({fruit: !categorys.fruit }) } checked={categorys.fruit}/>
                            <label className="form-check-label blancT" htmlFor="fruit">
                            Fruit
                            </label>
                        </div>

                        <div className="">
                            <input className="form-check-input me-2 check" type="checkbox" id="caramel" onChange={() => modifyCategory({caramel: !categorys.caramel }) } checked={categorys.caramel}/>
                            <label className="form-check-label blancT" htmlFor="caramel">
                            Caramel
                            </label>
                        </div>

                        <div className="">
                            <input className="form-check-input me-2 check" type="checkbox" id="liqueur" onChange={() => modifyCategory({liqueur: !categorys.liqueur }) } checked={categorys.liqueur}/>
                            <label className="form-check-label blancT" htmlFor="liqueur">
                            Liqueur
                            </label>
                        </div>

                        <p className="blancT title h3 text-decoration-underline mt-5 mb-3">Prix</p>
                        <div className="d-flex align-items-center mb-3 ">
                            <p className="blancT me-3">Prix min</p>
                            <select className="form-select w-35 check check" aria-label="Default select example">
                               {optionPrice(100, "€")}
                            </select>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="blancT me-3">Prix max</p>
                            <select className="form-select w-35 check" aria-label="Default select example">
                               {optionPrice(100, "€", 100)}
                            </select>
                        </div>

                        <p className="blancT title h3 mt-5">Notes</p>
                        <div className="d-flex align-items-center mb-3">
                            <p className="blancT me-3">Note min</p>
                            <select className="form-select w-35 check" aria-label="Default select example">
                               {optionPrice(5)}
                            </select>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="blancT me-3">Note max</p>
                            <select  className="form-select w-35 check" aria-label="Default select example">
                               {optionPrice(5,"",5)}
                            </select>
                        </div>


                    </form>
                </div>
                </div>
                
                    <Products products={visibleProduct} categorys={categorys}/>
            </div>
        </div>
    );
};



