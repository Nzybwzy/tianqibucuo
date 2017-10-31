/**
 * Created by nap on 17/5/22.
 */


export default (config) => {
    
    if (process.env.NODE_ENV === 'development') {
        
        const loaders = config.module.loaders;
        
        for (let i = 2; i <= 5; i++) {
            
            const loader = loaders[i].loader.split('!');
            
            const result = loader.map(item => {
                const load = item.split('?');
                
                if (load[0] === 'css' || load[0] === 'less') {
                    if (load.length === 1) {
                        load.push('sourceMap');
                    } else {
                        if (load[0] === 'less') {
                            load[1] = JSON.stringify({...JSON.parse(load[1]), sourceMap: true});
                        } else {
                            load[1] += '&sourceMap';
                        }
                    }
                }
                
                return load.join('?');
            });
            
            loaders[i].loader = result.join('!');
        }
    }
    
    return config;
};