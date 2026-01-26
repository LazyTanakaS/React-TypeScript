#!/bin/bash

# Скрипт для создания React компонентов
# Использование: ./create-component.sh ComponentName

if [ -z "$1" ]; then
  echo "Ошибка: Укажите имя компонента"
  echo "Использование: ./create-component.sh ComponentName"
  exit 1
fi

COMPONENT_NAME=$1
FILE_PATH="src/${COMPONENT_NAME}.tsx"

# Проверяем, существует ли уже файл
if [ -f "$FILE_PATH" ]; then
  echo "Ошибка: Компонент ${COMPONENT_NAME} уже существует!"
  exit 1
fi

# Создаём компонент
cat > "$FILE_PATH" << EOF
interface ${COMPONENT_NAME}Props {
  // Добавьте ваши props здесь
}

function ${COMPONENT_NAME}(props: ${COMPONENT_NAME}Props) {
  return (
    <div className="${COMPONENT_NAME,,}">
      <h2>${COMPONENT_NAME}</h2>
    </div>
  );
}

export default ${COMPONENT_NAME};
EOF

echo "✓ Компонент ${COMPONENT_NAME} успешно создан: ${FILE_PATH}"
