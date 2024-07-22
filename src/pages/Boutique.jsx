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


    const optionPrice = (max, signe = "", selected = 1) => {
        const options = []
        for (let i = 1; i <= max; i++) {
            if (selected === i) {
                options.push(<option onClick={(e) => { e.target.value, console.log(e) }} selected key={i} value={i}>{i + signe}</option>)
            } else {
                options.push(<option key={i} value={i}>{i + signe}</option>)
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

    const [note, setNote] = useState(
        {
            'noteMin': 1,
            'noteMax': 5,

        }
    )

    const handleOnChangeNoteMin = (e) => {
        const newNote = {
            'noteMin': e.target.value,
            'noteMax': note.noteMax
        }
        setNote(newNote)
    }

    const handleOnChangeNoteMax = (e) => {
        const newNote = {
            'noteMin': note.noteMin,
            'noteMax': e.target.value,
        }
        setNote(newNote)
    }

    const [prix, setPrix] = useState(
        {
            'prixMin': 1,
            'prixMax': 100,

        }
    )


    const handleOnChangeMin = (e) => {
        const newPrix = {
            'prixMin': e.target.value,
            'prixMax': prix.prixMax
        }
        setPrix(newPrix)
    }

    const handleOnChangeMax = (e) => {
        const newPrix = {
            'prixMin': prix.prixMin,
            'prixMax': e.target.value,
        }
        setPrix(newPrix)
    }

    const visibleProduct = products.filter(product => {
        return Object.keys(categorys).every(category => {
            return (!product.category[category] || categorys[category]) && (product.price > prix['prixMin'] && product.price < prix['prixMax']) && (product.note >= note['noteMin'] && product.note <= note['noteMax']);
        });
    });






    const modifyCategory = (changeCategory) => {
        setCategorys((newCategorys) => ({
            ...newCategorys,
            ...changeCategory

        }
        ))
    }

    const [bool, setBool] = useState(false)

    const everyToggleCategory = () => {
        const newCategory = {}

        for (let i in categorys) {
            newCategory[i] = bool
            modifyCategory(newCategory)

        }
        setBool(!bool)
    }

    const [indiceCat, setIndiceCat] = useState('+')
    const [indicePrix, setIndicePrix] = useState('+')
    const [indiceNote, setIndiceNote] = useState('+')

    const togglerIndice = (indice, setIndice) => {
        if (indice === '+') {
            setIndice('-')
        } else {
            setIndice('+')
        }
        return indice
    }

    const Categories = () => {
        return (
            <>

                <div className="">
                    <input className="form-check-input me-2 check" type="checkbox" id="tous" onChange={() => modifyCategory(everyToggleCategory())} defaultChecked={categorys.tous} />
                    <label className="form-check-label colorSize  " htmlFor="tous" >
                        Tous
                    </label>
                </div>


                <div className="">
                    <input className="form-check-input me-2 check" type="checkbox" id="chocolat-blanc" onChange={() => modifyCategory({ blanc: !categorys.blanc })} checked={categorys.blanc} />
                    <label className="form-check-label colorSize" htmlFor="chocolat-blanc">
                        Chocolat blanc
                    </label>
                </div>

                <div className="">
                    <input className="form-check-input me-2 check" type="checkbox" id="chocolatlait" onChange={() => modifyCategory({ lait: !categorys.lait })} checked={categorys.lait} />
                    <label className="form-check-label colorSize" htmlFor="chocolatlait">
                        Chocolat au lait
                    </label>
                </div>

                <div className="">
                    <input className="form-check-input me-2 check" type="checkbox" id="chocolatlait" onChange={() => modifyCategory({ noir: !categorys.noir })} checked={categorys.noir} />
                    <label className="form-check-label colorSize" htmlFor="chocolatlait">
                        Chocolat noir
                    </label>
                </div>

                <div className="">
                    <input className="form-check-input me-2 check" type="checkbox" id="noix/noisette" onChange={() => modifyCategory({ noix: !categorys.noix })} checked={categorys.noix} />
                    <label className="form-check-label colorSize" htmlFor="noix/noisette">
                        Noix/Noisette
                    </label>
                </div>

                <div className="">
                    <input className="form-check-input me-2 check" type="checkbox" id="fruit" onChange={() => modifyCategory({ fruit: !categorys.fruit })} checked={categorys.fruit} />
                    <label className="form-check-label colorSize" htmlFor="fruit">
                        Fruit
                    </label>
                </div>

                <div className="">
                    <input className="form-check-input me-2 check" type="checkbox" id="caramel" onChange={() => modifyCategory({ caramel: !categorys.caramel })} checked={categorys.caramel} />
                    <label className="form-check-label colorSize" htmlFor="caramel">
                        Caramel
                    </label>
                </div>

                <div className="">
                    <input className="form-check-input me-2 check" type="checkbox" id="liqueur" onChange={() => modifyCategory({ liqueur: !categorys.liqueur })} checked={categorys.liqueur} />
                    <label className="form-check-label colorSize" htmlFor="liqueur">
                        Liqueur
                    </label>
                </div>
            </>
        )
    }

    const Prix = () => {
        return (
            <>
                <div className="d-flex align-items-center mb-3 ">
                    <p className="colorSize me-3">Prix min</p>
                    <select onChange={handleOnChangeMin} className="form-select w-35 check check" aria-label="Default select example">
                        {optionPrice(100, "€")}
                    </select>
                </div>
                <div className="d-flex align-items-center">
                    <p className="colorSize me-3">Prix max</p>
                    <select onChange={handleOnChangeMax} className="form-select w-35 check" aria-label="Default select example">
                        {optionPrice(100, "€", 100)}
                    </select>
                </div>
            </>
        )
    }

    const Note = () => {
        return (
            <>
                <div className="d-flex align-items-center mb-3">
                    <p className="colorSize me-3">Note min</p>
                    <select onChange={handleOnChangeNoteMin} className="form-select w-35 check" aria-label="Default select example">
                        {optionPrice(5)}
                    </select>
                </div>
                <div className="d-flex align-items-center">
                    <p className="colorSize me-3">Note max</p>
                    <select onChange={handleOnChangeNoteMax} className="form-select w-35 check" aria-label="Default select example">
                        {optionPrice(5, "", 5)}
                    </select>
                </div>
            </>
        )
    }

    return (
        <div>
            <h1 className="jauneT my-5 text-center display-3">BOUTIQUE</h1>
            <div className=" d-flex flex-column flex-md-row pt-5 ">
                <div className="filtre">
                    <div className=" marronCBg p-5 ps-2 pt-0 marronFBT d-none d-md-block">
                        <p className="colorSize mb-3 mt-2 title h5  ">FILTRE</p>
                        <form action="colorSize" className="flex-column">
                            <p className="colorSize title h3 text-decoration-underline mt-4 mb-4">Catégories</p>
                            <Categories />
                            <p className="colorSize title h3 text-decoration-underline mt-5 mb-3">Prix</p>
                            <Prix />
                            <p className="colorSize title h3 mt-5">Notes</p>
                            <Note />
                        </form>
                    </div>
                    <div className="ms-5 mb-5 d-flex flex-column">
                        <p className="d-inline-flex gap-1">
                            <a onClick={() => togglerIndice(indiceCat, setIndiceCat)} className="colorSize title h3 text-decoration-underline mt-4 mb-4" data-bs-toggle="collapse" href="#collapseCategorie" role="button" aria-expanded="false" aria-controls="collapseCategorie">Catégories {indiceCat}</a>

                        </p>
                        <div className="collapse" id="collapseCategorie">
                            <Categories />
                        </div>
                        <p className="d-inline-flex gap-1">
                            <a onClick={() => togglerIndice(indicePrix, setIndicePrix)} className="colorSize title h3 text-decoration-underline mt-4 mb-4" data-bs-toggle="collapse" href="#collapsePrix" role="button" aria-expanded="false" aria-controls="collapsePrix">Prix {indicePrix}</a>

                        </p>
                        <div className="collapse" id="collapsePrix">
                        <Prix />
                        </div>
 
                        <p className="d-inline-flex gap-1">
                            <a onClick={() => togglerIndice(indiceNote, setIndiceNote)} className="colorSize title h3 text-decoration-underline mt-4 mb-4" data-bs-toggle="collapse" href="#collapseNote" role="button" aria-expanded="false" aria-controls="collapseNote">Note {indiceNote}</a>

                        </p>
                        <div className="collapse" id="collapseNote">
                        <Note />
                        </div>

                    </div>

                </div>
                <Products products={visibleProduct} categorys={categorys} />
            </div>
        </div>
    );
};



