

const checkAsync = async () => {
    await setTimeout(() => {
        console.log('await')
    }, 2000);
    
    console.log('normal')
}

checkAsync()