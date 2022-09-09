import '../App.css'
import {useEffect, useState} from 'react'

export default function EditBar({name, setName, desc, setDesc, show, setTags, tags}){
    const [img, setImg] = useState('')
    const [tag, setTag] = useState('')
    
    const grabImage = (e) => {
        let file = new FileReader();
        file.readAsDataURL(document.getElementById('inp').files[0]);
        file.onload = (fileEvent) => {
            setImg(fileEvent.target.result);
        }
    }

    const SetMainColor = (color) => {
        document.getElementById('app').style.setProperty('--main-theme', color);
    }

    useEffect(() => {
        let bottomEdit = document.getElementById('bottomEdit');
        const colorGrid = bottomEdit.getElementsByClassName('colorGrid')[0];
        let colors = colorGrid.querySelectorAll('.color');
        colors.forEach((color, i) => {
            color.addEventListener('click', (e) => {
                colors.forEach((c) => c.classList.remove('colorRing'));
                colors[i].classList.add('colorRing');
            })
        })
    })

    return(
        <>
            <div className='editBar'>
                <p className='head'>
                    Community Title
                </p>
                <input value={name} className="input" onChange={(e) => setName(e.target.value)} />
                <p className='head'>
                    Banner Description
                </p>
                <textarea value={desc} className="textarea" onChange={(e) => setDesc(e.target.value)} />
                <p className='head'>
                    Select Community Logo
                </p>
                <div className='select'>
                    <input type="file" name="myImage" className='selectImg' accept="image/*" id="inp" onChange={(e) => grabImage(e)}/>
                    <button onClick={() => {
                        document.getElementById('inp').click();
                    }} className="selectBtn"></button>
                    {
                        img != '' ? (
                            <img src={img} className="preview"/>
                        ) : null
                    }
                </div>
                <p className='head'>
                    Community Theme
                </p>
                <div className='colorGrid'>
                    <div className='color red' onClick={() => SetMainColor('#f95858')} style={{background : '#f95858'}}/>
                    <div className='color redDark' onClick={() => SetMainColor('#e11414')} style={{background : '#e11414'}}/>
                    <div className='color yellow' onClick={() => SetMainColor('#8dc900')} style={{background : '#8dc900'}}/>
                    <div className='color green' onClick={() => SetMainColor('#3000e3')} style={{background : '#3000e3'}}/>
                    <div className='color blue' onClick={() => SetMainColor('#585bf9')}  style={{background : '#585bf9'}} />
                    <div className='color lightblue' onClick={() => SetMainColor('#8294f3')} style={{background : '#8294f3'}}/>
                </div>
                {
                    show ? (
                    <>
                        <p className='head'>
                            Create Tag
                        </p>
                        <input value={tag} className="input" onChange={(e) => setTag(e.target.value)} />
                        <button onClick={tag != "" ? () => {
                            setTags([...tags, tag]);
                            setTag('');
                        } : null} className='btn'>
                            Create
                        </button>
                    </>
                    ) : null
                }
            </div>
            <button className='fa' onClick={() => {
                document.getElementsByClassName('bottomEdit')[0].style.animation = 'pullup 0.5s ease forwards'
            }}>
                Edit Theme
            </button>
            <div className='bottomEdit' id='bottomEdit'>
                <div className='colorGrid'>
                    <div className='color red' onClick={() => SetMainColor('#f95858')} style={{background : '#f95858'}}/>
                    <div className='color redDark' onClick={() => SetMainColor('#e11414')} style={{background : '#e11414'}}/>
                    <div className='color yellow' onClick={() => SetMainColor('#8dc900')} style={{background : '#8dc900'}}/>
                    <div className='color green' onClick={() => SetMainColor('#3000e3')} style={{background : '#3000e3'}}/>
                    <div className='color blue' onClick={() => SetMainColor('#585bf9')}  style={{background : '#585bf9'}} />
                    <div className='color lightblue' onClick={() => SetMainColor('#8294f3')} style={{background : '#8294f3'}}/>
                </div>
            </div>
        </>
    )
}