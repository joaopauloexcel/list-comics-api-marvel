import './CardComics.scss';
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

interface Props {
    dataArray:Array<any>;
    actionComponent?: Function;
    checkArray?: any;
	checkOnClickAction?: Function;
}

const CardComics = ({ 
    dataArray = [], 
    actionComponent = () => {},
    checkArray,
	checkOnClickAction = () => {},
}:Props) => (

    <div data-testid="card-comics-render" className={"card-comics"}>
        {
            !!dataArray && dataArray.length > 0 && dataArray.map((dataObj:any, index:any) =>

                <div key={dataObj.id} className={"row-comics"}>

                    {
                    checkArray && Array.isArray(checkArray) && checkArray
                    .map((itemCheck: any, indexCheck: any) => (
                            <Checkbox
                                checked={dataObj.isChecked ? dataObj.isChecked : false}
                                onChange={() =>
                                    checkOnClickAction({
                                        name: itemCheck,
                                        "item":dataObj,
                                        index,
                                    })
                                }
                                key={`CheckBox-${index}-${indexCheck}`}
                                value="rescheduleTask"
                                style={{ color: 'rgb(46, 45, 45)' }}
                            />
                        ))
                    }

                    <a className="" href={dataObj.urls[0].url || ""} target="_blank">

                        <div className="display-title">
                            <div className="display-img-block">
                                <img 
                                    className="" 
                                    src={dataObj.thumbnail.path + '.' + dataObj.thumbnail.extension} 
                                    alt={dataObj.thumbnail.path + '.' + dataObj.thumbnail.extension} 
                                />
                            </div>

                            <div className="display-title-block">
                                <span className="">
                                    {dataObj.title || ""}
                                </span>
                            </div>
                        </div>

                    </a>  

                    {actionComponent({"item":dataObj})}

                </div>

        )}
        {
            !!!dataArray && <div>No aguardo de dados</div>
        }
    </div>
    
);

export {CardComics};