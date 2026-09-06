import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const [editingOptionIndex, setEditingOptionIndex] = useState(null);
  const [workingOptionText, setWorkingOptionText] = useState('');
  const { state, dispatch } = useContext(SurveyContext);
  const isEditing = state.ui.editingQuestionId === question.id;

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // TODO: Students will add edit functionality here
  const handleEdit = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: {
        questionId: isEditing ? null : question.id,
      },
    });
  };

  const handleEditOption = (index) => {
    setEditingOptionIndex(index);
    setWorkingOptionText(question.options[index]);
  };

  const handleSaveOption = () => {
    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId: question.id,
        optionIndex: editingOptionIndex,
        newText: workingOptionText,
      },
    });

    setEditingOptionIndex(null);
    setWorkingOptionText('');
  };

  const handleDeleteOption = (index) => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: {
        questionId: question.id,
        optionIndex: index,
      },
    });
  };

  // TODO: Students will add save functionality here
  const handleSave = () => {
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        id: question.id,
        newText: workingText,
      },
    });

    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: {
        questionId: null,
      },
    });
  };

  // TODO: Students will add delete functionality here
  const handleDelete = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this question?'
    );

    if (confirmed) {
      dispatch({
        type: 'DELETE_QUESTION',
        payload: {
          id: question.id,
        },
      });
    }
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>

        <div className={styles['question-actions']}>
          <button className={styles['edit-btn']} onClick={handleEdit}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>

          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      <div className={styles['question-content']}>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={workingText}
              onChange={(e) => setWorkingText(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>

          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                {editingOptionIndex === index ? (
                  <div>
                    <input
                      type="text"
                      value={workingOptionText}
                      onChange={(e) => setWorkingOptionText(e.target.value)}
                    />

                    <button onClick={handleSaveOption}>Save</button>
                  </div>
                ) : (
                  <>
                    <span className={styles['option-text']}>{option}</span>

                    <button onClick={() => handleEditOption(index)}>
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteOption(index)}
                      disabled={question.options.length <= 2}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
