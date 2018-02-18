var recipes = {
  dick: 'big dick',
  dog: 'whateva'
};

function updateObjectWithKeyAndValue (object, key, value)
{
  var newObj;
  
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value)
{
  object[key] = value;
  return object;
}

function deleteFromObjectByKey (object, key)
{
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}




