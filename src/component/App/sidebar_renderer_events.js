
/**
 * 
 * 
 */

// routes renderer_events
const RoutesEvents = {
    database_maintenance : function(e){
        e.preventDefault();

        console.log('haha')

        electronRenderer.send('database-maintenance', {name : "DM"})
    }
}

export default RoutesEvents